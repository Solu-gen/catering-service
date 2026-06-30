import { useState, useEffect, useMemo } from "react";
import { useCart } from "../context/CartContext";
import { CartProvider } from "../context/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import "../context/style.css";


const CartPageContent = () => {
    const { cart, updateCount, clearCart } = useCart();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/products/");


                if (!response.ok) {
                    throw new Error("Ошибка загрузки меню");
                }

                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadProducts();
    }, []);

    const cartItems = products.filter((product) => cart[product.id]);

    const totalPrice = useMemo(() => {
        return cartItems.reduce((sum, item) => {
            return sum + Number(item.price) * cart[item.id];
        }, 0);
    }, [cartItems, cart]);

    const [deliveryType, setDeliveryType] = useState("delivery");

    const [formData, setFormData] = useState({
        street: "",
        apartment: "",
        comment: "",
        date: "",
        time: "",
        name: "",
        phone: "",
    });


    const handleSubmit = async () => {
        try {
            const token =
                localStorage.getItem("access_token") ||
                localStorage.getItem("access");


            if (!token) {
                alert("Сначала войдите в систему");
                return;
            }


            if (cartItems.length === 0) {
                alert("Корзина пуста");
                return;
            }


            if (!formData.street.trim()) {
                alert("Введите адрес доставки");
                return;
            }


            if (!formData.date || !formData.time) {
                alert("Укажите дату и время доставки");
                return;
            }


            const address = `${formData.street}${formData.apartment ? `, кв./офис ${formData.apartment}` : ""
                }`;


            const deliveryTime = `${formData.date}T${formData.time}:00`;


            const orderData = {
                address,
                delivery_time: deliveryTime,
                customer_name: formData.name,
                customer_phone: formData.phone,
                comment: formData.comment,
                items: cartItems.map((item) => ({
                    product_id: item.id,
                    quantity: cart[item.id],
                })),
            };


            const response = await fetch("http://127.0.0.1:8000/api/orders/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(orderData),
            });


            const data = await response.json();


            if (!response.ok) {
                console.error(data);
                throw new Error(data.detail || JSON.stringify(data));
            }
            alert(`Заказ №${data.id} успешно создан`);

            clearCart();

            window.location.href = `payment.html?order=${data.id}`;
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Загрузка меню...
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center text-red-600">
                {error}
            </div>
        );
    }

    return (
        <main className="bg-stone-100">
            <div className="w-full px-4 pt-2 pb-8 lg:px-8 sm:px-6 xl:px-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-3">Корзина</h1>
                <button
                    onClick={clearCart}
                    className="text-indigo-600 hover:text-indigo-900 mb-8"
                >
                    Очистить корзину
                </button>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-white rounded-xl p-6">
                        <div className="hidden md:grid grid-cols-4 gap-4 text-sm font-semibold text-gray-500 mb-5">
                            <div></div>
                            <div>Цена за 1 шт.</div>
                            <div>Количество</div>
                            <div>Итого</div>
                        </div>

                        {cartItems.length === 0 ? (
                            <div className="py-16 text-center text-gray-500">
                                Корзина пуста
                            </div>
                        ) : (
                            cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="border-t border-gray-200 py-6"
                                >
                                    <div className="grid md:grid-cols-4 gap-4 items-center">
                                        <div className="flex gap-4">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-24 h-24 rounded-lg object-cover"
                                            />

                                            <div>
                                                <h3 className="font-semibold text-lg">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-gray-500">
                                                    {item.weight} г
                                                </p>

                                                <button
                                                    onClick={() => updateCount(item.id, 0)}
                                                    className="text-indigo-600 text-sm mt-2 hover:underline"
                                                >
                                                    Удалить
                                                </button>
                                            </div>
                                        </div>

                                        <div className="font-medium">
                                            {item.price} ₽
                                        </div>

                                        <div>
                                            <div className="inline-flex border rounded-lg overflow-hidden">
                                                <button
                                                    className="px-4 py-2 hover:bg-gray-100"
                                                    onClick={() =>
                                                        updateCount(
                                                            item.id,
                                                            Math.max(1, cart[item.id] - 1)
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>

                                                <div className="px-5 py-2 border-x">
                                                    {cart[item.id]}
                                                </div>

                                                <button
                                                    className="px-4 py-2 hover:bg-gray-100"
                                                    onClick={() =>
                                                        updateCount(item.id, cart[item.id] + 1)
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <div className="font-semibold">
                                            {Number(item.price) * cart[item.id]} ₽
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl p-6">
                            <h2 className="text-2xl font-bold mb-4">Способ доставки</h2>
                            <div className="space-y-3">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="radio"
                                        checked={deliveryType === "delivery"}
                                        onChange={() => setDeliveryType("delivery")}
                                    />
                                    <span>Доставка</span>
                                </label>

                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="radio"
                                        checked={deliveryType === "pickup"}
                                        onChange={() => setDeliveryType("pickup")}
                                    />
                                    <span>Самовывоз</span>
                                </label>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6">
                            <h2 className="text-2xl font-bold mb-6">Адрес доставки</h2>

                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Улица, номер дома"
                                    value={formData.street}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            street: e.target.value,
                                        })
                                    }
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                />

                                <input
                                    type="text"
                                    placeholder="Квартира / офис"
                                    value={formData.apartment}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            apartment: e.target.value,
                                        })
                                    }
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                />
                                <textarea
                                    rows="4"
                                    placeholder="Комментарий"
                                    value={formData.comment}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            comment: e.target.value,
                                        })
                                    }
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                />
                            </div>
                        </div>


                        <div className="bg-white rounded-xl p-6">
                            <h2 className="text-2xl font-bold mb-6">
                                Дата и время доставки
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block mb-2 text-sm">
                                        Дата доставки
                                    </label>

                                    <input type="date"
                                        value={formData.date}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                date: e.target.value,
                                            })
                                        }
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm">
                                        Время доставки
                                    </label>

                                    <input type="time"
                                        value={formData.time}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                time: e.target.value,
                                            })
                                        }
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6">
                            <h2 className="text-2xl font-bold mb-6">Контактные данные</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block mb-2">
                                        Имя Фамилия *
                                    </label>

                                    <input type="text"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                name: e.target.value,
                                            })
                                        }
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2">Телефон *</label>

                                    <input type="tel"
                                        value={formData.phone}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                phone: e.target.value,
                                            })
                                        }
                                        placeholder="+7 (___) ___-__-__"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6">
                            <div className="flex justify-between mb-4">
                                <span>Товаров:</span>
                                <span>{cartItems.length}</span>
                            </div>

                            <div className="flex justify-between text-xl font-bold mb-6">
                                <span>Итого:</span>
                                <span>{totalPrice} ₽</span>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition"
                            >
                                Подтвердить заказ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};


const CartPage = () => {
    return (
        <CartProvider>
            <Header />
            <CartPageContent />
            <Footer />
            <ScrollToTopButton />
        </CartProvider>
    );
};


export default CartPage;