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
      <div className="w-full max-w-md bg-white/10 rounded-3xl p-8 flex items-center flex-col">
        {/* Зеленая иконка с галочкой */}
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg mb-6 animate-bounce-in">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-white mb-6">Успешная оплата!</h1>
        <p className="text-white/80 text-center mb-8 px-4">Ваша транзакция успешно обработана</p>
        {/* Карточка с деталями транзакции*/}
        <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20 space-y-4">
          <div className="flex justify-between">
            <span className="text-white">Сумма</span>
            <span className="text-white font-bold">{order.total_price} ₽ </span>
          </div>
          <div className="border-t border-white/10"></div>

          {/* Номер заказа */}
          <div className="flex justify-between items-center">
            <span className="text-white/70 text-sm">Номер заказа</span>
            <span className="text-white">#{order.id} </span>
          </div>
          <div className="border-t border-white/10"></div>

          {/* Дата создания заказа */}
          <div className="flex justify-between items-center">
            <span className="text-white"> Дата создания</span>

            <span className="text-white">
              {new Date(
                order.created_at
              ).toLocaleString("ru-RU")}
            </span>
          </div>
        </div>
        {/* Кнопка "Продолжить покупки" */}
        <button
          onClick={handleContinueShopping}
          className="w-full py-4 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-semibold rounded-xl transition-all duration-200 mb-3 border border-white/20" >
          Продолжить покупки
        </button>
        {/* Благодарственное сообщение */}
        <div className="text-center px-4">
          <p className="text-white text-sm mb-1">Благодарим за заказ!</p>
          <p className="text-white/70 text-xs"> Детали заказа можете посмотреть в личном кабинете.</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;