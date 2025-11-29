from fastapi import FastAPI

app = FastAPI(title="lavender")

@app.get("/")
def read_root():
    return {"message": "Hello from FastAPI!"}
