# Food ordering backend

Stack: Django 5 + DRF + SimpleJWT + SQLite.

## Quick start

```bash
cd food-backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py seed_demo_data
python manage.py createsuperuser
python manage.py runserver
```

## Main endpoints

- `POST /api/auth/register/`
- `POST /api/auth/login/`
- `GET /api/auth/me/`
- `GET /api/categories/`
- `GET /api/products/`
- `POST /api/orders/`
- `GET /api/orders/history/`
- `GET /api/orders/<id>/`
- `POST /api/orders/<id>/pay/`
- `PUT /api/orders/<id>/status/`
- `POST /api/leads/`

## Demo data

Use the demo seed command to create 3 categories and 9 products that match the current frontend menu.
