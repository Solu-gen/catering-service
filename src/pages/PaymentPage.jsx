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
    window.location.href =
      `payment-success.html?order=${orderId}`;
  };


  if (loading) {
    return <div>Загрузка...</div>;
  }


  if (!order) {
    return <div>Заказ не найден</div>;
  }

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl grid md:grid-cols-2">


        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6">
            Оплата заказа №{order.id}
          </h2>


          <button
            onClick={handlePayment}
            className="w-full py-4 bg-indigo-600 text-white rounded-xl"
          >
            Оплатить
          </button>
        </div>


        <div className="p-8">
          <h3 className="text-xl font-bold mb-4">
            Сумма платежа
          </h3>


          <div className="flex justify-between">
            <span>Сумма заказа</span>
            <span>{order.total_price} ₽</span>
          </div>


          <div className="flex justify-between mt-3">
            <span>НДС</span>
            <span>0 ₽</span>
          </div>


          <div className="flex justify-between mt-4 text-xl font-bold">
            <span>Итого</span>
            <span>{order.total_price} ₽</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;