import { useEffect, useMemo, useState } from "react";
import { CartProvider } from "../context/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import "../context/style.css";

const STATUS_STYLES = {
  created: {
    statusColor: "text-amber-800",
    statusBg: "bg-amber-100",
  },
  paid: {
    statusColor: "text-blue-800",
    statusBg: "bg-blue-100",
  },
  cooking: {
    statusColor: "text-orange-800",
    statusBg: "bg-orange-100",
  },
  ready: {
    statusColor: "text-emerald-800",
    statusBg: "bg-emerald-100",
  },
  delivery: {
    statusColor: "text-sky-800",
    statusBg: "bg-sky-100",
  },
  delivered: {
    statusColor: "text-gray-800",
    statusBg: "bg-gray-100",
  },
  cancelled: {
    statusColor: "text-red-800",
    statusBg: "bg-red-100",
  },
};

const formatDate = (iso) => {
  if (!iso) return "";
  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }).format(new Date(iso));
};

const formatTime = (iso) => {
  if (!iso) return "";
  return new Intl.DateTimeFormat("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));
};

const ProfilePageContent = () => {
  const [activeTab, setActiveTab] = useState("orders");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const tabs = [
    { id: "messages", label: "СООБЩЕНИЯ" },
    { id: "orders", label: "ЗАКАЗЫ" },
    { id: "profile", label: "ПРОФИЛЬ" },
    { id: "discounts", label: "СКИДКИ" },
    { id: "bonuses", label: "БОНУСЫ" },
  ];

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const token =
          localStorage.getItem("access_token") ||
          localStorage.getItem("access");

        if (!token) {
          setError("Сначала войдите в систему");
          return;
        }

        const historyResponse = await fetch(
          "http://127.0.0.1:8000/api/orders/history/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!historyResponse.ok) {
          throw new Error("Не удалось загрузить заказы");
        }

        const history = await historyResponse.json();

        const detailedOrders = await Promise.all(
          history.map(async (order) => {
            const detailResponse = await fetch(
              `http://127.0.0.1:8000/api/orders/${order.id}/`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            if (!detailResponse.ok) {
              return null;
            }

            const detail = await detailResponse.json();

            const styles =
              STATUS_STYLES[detail.status] ||
              STATUS_STYLES.delivered;

            return {
              id: detail.id,
              status: detail.status_display || detail.status,
              statusColor: styles.statusColor,
              statusBg: styles.statusBg,
              images: (detail.items || [])
                .map((item) => item.image)
                .filter(Boolean)
                .slice(0, 2),
              discount: 0,
              bonusSpent: 0,
              bonusEarned: 0,
              deliveryDate: formatDate(detail.delivery_time),
              deliveryTime: formatTime(detail.delivery_time),
              deliveryType: "Доставка",
              address: detail.address,
              total: Number(detail.total_price || 0),
            };
          })
        );

        setOrders(detailedOrders.filter(Boolean));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.location.href = "index.html";
  };

  const ordersCount = useMemo(() => orders.length, [orders]);

  if (loading) {
    return (
      <main className="bg-stone-100 p-6 md:p-10 min-h-screen">
        <div className="flex items-center justify-center min-h-[50vh]">
          Загрузка заказов...
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="bg-stone-100 p-6 md:p-10 min-h-screen">
        <div className="flex items-center justify-center min-h-[50vh] text-red-600">
          {error}
        </div>
      </main>
    );
  }

  return (
    <main className="px-4 py-2 bg-stone-100 lg:px-8 sm:px-6 xl:px-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Личный кабинет
        </h1>

        <div className="flex transition-all duration-200 hover:text-indigo-600 items-center">
          <button
          onClick={handleLogout}
          className="text-lg " >
          ВЫЙТИ
        </button>
        <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        </div>
      </div>

      <nav className="flex flex-wrap gap-6 md:gap-8 border-b border-gray-200 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative pb-3 text-sm md:text-base font-semibold transition-colors ${
              activeTab === tab.id
                ? "text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <span className="flex items-center gap-1">
              {tab.label}
            </span>
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500"></span>
            )}
          </button>
        ))}
      </nav>


      <h2 className="text-xl md:text-2xl font-medium text-gray-900 mb-6">
        Ваши заказы ({ordersCount})
      </h2>


      {orders.length === 0 ? (
        <div className="bg-gray-50 rounded-xl p-6 text-gray-600">
          Заказов пока нет.
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-gray-50 rounded-xl p-6 md:p-8 space-y-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    Заказ №{order.id}
                  </h3>


                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-md ${order.statusBg} ${order.statusColor}`}
                  >
                    {order.status}
                  </span>
                </div>


                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-700 font-medium text-sm md:text-base"
                >
                  Подробнее о заказе →
                </a>
              </div>


              <div className="flex gap-3 flex-wrap">
                {order.images.length > 0 ? (
                  order.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Товар ${idx + 1}`}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover border border-gray-200"
                    />
                  ))
                ) : (
                  <div className="text-sm text-gray-500">
                    Нет изображений товаров
                  </div>
                )}
              </div>


              <div className="flex flex-wrap gap-8 text-sm md:text-base text-gray-700">
                <div>
                  <span className="font-semibold">Скидка по заказу:</span>{" "}
                  {order.discount} %
                </div>
                <div>
                  <span className="font-semibold">
                    Баллов потрачено/зачислено:
                  </span>{" "}
                  {order.bonusSpent}/{order.bonusEarned}
                </div>
              </div>


              <hr className="border-gray-300" />


              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Дата доставки
                  </h4>
                  <p className="text-gray-700">
                    {order.deliveryDate}
                    {order.deliveryTime ? ` - ${order.deliveryTime}` : ""}
                  </p>
                </div>


                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    {order.deliveryType}
                  </h4>
                  <p className="text-gray-700">{order.address}</p>
                </div>
              </div>


              <hr className="border-gray-300" />


              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl md:text-2xl font-bold text-gray-900">
                    Сумма к оплате
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-gray-900">
                    {order.total}
                  </span>
                  <span className="text-lg text-gray-700">₽</span>
                </div>

                <button className="px-5 py-2 border border-indigo-500 text-indigo-600 rounded-md font-medium hover:bg-indigo-50 transition-colors">
                  Повторить заказ
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

const ProfilePage = () => {
  return (
    <CartProvider>
      <Header />
      <ProfilePageContent />
      <Footer />
      <ScrollToTopButton />
    </CartProvider>
  );
};

export default ProfilePage;