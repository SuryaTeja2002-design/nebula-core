FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt gunicorn

COPY src/ ./src

WORKDIR /app/src

CMD ["gunicorn", "--bind", "0.0.0.0:6000", "main:app"]
