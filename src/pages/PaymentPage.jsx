import { useEffect, useState } from "react";

const PaymentPage = () => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = new URLSearchParams(
    window.location.search
  );

  const orderId = params.get("order");

  useEffect(() => {
    const loadOrder = async () => {
      try {
        const token =
          localStorage.getItem("access_token") ||
          localStorage.getItem("access");

        const response = await fetch(
          `http://127.0.0.1:8000/api/orders/${orderId}/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error("Заказ не найден");
        }
        setOrder(data);
      } catch (error) {
        console.error(error);
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadOrder();
  }, [orderId]);

  const handlePayment = async () => {
  try {
    const token =
      localStorage.getItem("access_token") ||
      localStorage.getItem("access");

    const response = await fetch(
      `http://127.0.0.1:8000/api/orders/${orderId}/pay/`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.detail || "Ошибка оплаты"
      );
    }

    window.location.href =
      `payment-success.html?order=${orderId}`;

  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};


  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (!order) {
    return <div>Заказ не найден</div>;
  }

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col items-center justify-center sm:flex-row p-8">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Блок деталей оплаты */}
        <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Оплата заказа №{order.id}</h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Имя и фамилия владельца карты
              </label>
              <input type="text"
                id="cardName"
                placeholder="ИМЯ ФАМИЛИЯ"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Номер карты
              </label>
              <input type="text"
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                           placeholder:text-gray-400" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Срок действия
                </label>
                <input
                  type="text"
                  id="expiry"
                  placeholder="MM/YY"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900
                             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                             placeholder:text-gray-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">CVC/CVV</label>
                <input type="text"
                  id="cvc"
                  placeholder="123"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900
                             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                             placeholder:text-gray-400" />
              </div>
            </div>
          </div>
          <button
            onClick={handlePayment}
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-200 mt-2" >
            Оплатить
          </button>
        </div>

        <div className="p-8 md:p-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Сумма платежа</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-gray-700">
              <span>Сумма заказа</span>
              <span className="font-medium">{order.total_price} ₽</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>НДС</span>
              <span className="font-medium">0 ₽</span>
            </div>
            <div className="border-t border-gray-200 pt-3 flex justify-between">
              <span className="text-lg font-bold text-gray-900">Итого</span>
              <span className="text-lg font-bold text-gray-900"
              >{order.total_price} ₽</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;