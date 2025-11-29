from fastapi import FastAPI

app = FastAPI(title="lavender")

@app.get("/")
def main():
    return {"message": "Hello from FastAPI!"}

