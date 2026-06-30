import React, { useEffect, useState } from "react";


const PaymentSuccessPage = () => {
  const [order, setOrder] = useState(null);


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
      }
    };


    loadOrder();
  }, [orderId]);


  const handleContinueShopping = () => {
    window.location.href = "/index.html";
  };


  if (!order) {
    return <div>Загрузка...</div>;
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-400 flex items-center justify-center p-8">


      <div className="w-full max-w-md bg-white/10 rounded-3xl p-8">


        <h1 className="text-4xl font-bold text-white mb-6">
          Успешная оплата!
        </h1>


        <div className="space-y-4">


          <div className="flex justify-between">
            <span className="text-white">Сумма</span>
            <span className="text-white font-bold">
              {order.total_price} ₽
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-white">Номер заказа</span>

            <span className="text-white">
              #{order.id}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-white"> Дата создания</span>

            <span className="text-white">
              {new Date(
                order.created_at
              ).toLocaleString("ru-RU")}
            </span>
          </div>
        </div>
        <button
          onClick={handleContinueShopping}
          className="w-full mt-8 py-4 bg-white/20 text-white rounded-xl" >
          Продолжить покупки
        </button>
      </div>
    </div>
  );
};


export default PaymentSuccessPage;
