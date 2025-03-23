from supabase import create_client, Client
from dotenv import load_dotenv
import os
import json

# Cargar variables desde .env
load_dotenv()

url = os.getenv("SUPABASE_URL")
key = os.getenv("SUPABASE_KEY")
supabase = create_client(url, key)

try:
    response = supabase.table("proyectos").select("*").execute()
    data = response.data

    # Ruta relativa al proyecto
    output_path = os.path.join("react_frontend", "public", "data.json")

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print("✅ Datos extraídos y guardados en:", output_path)

except Exception as e:
    print("❌ Error:", e)
