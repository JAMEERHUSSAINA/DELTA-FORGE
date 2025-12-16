# PROJECT INFO
 -> This project is an AI-powered Document Chat Application built using FastAPI, LangChain, FAISS, and Groq LLM, with a React frontend. It enables users to interact with their documents through natural language queries.
 
 -> Users can upload PDF, DOCX, or TXT files, and ask questions related to the uploaded content. The system is designed to provide quick and accurate answers based on the document data.

 -> The backend processes the uploaded files by extracting text, splitting it into meaningful chunks, and converting those chunks into vector embeddings using Sentence Transformers. These embeddings are stored in a FAISS vector database to support fast and efficient semantic search.

 -> When a question is asked, the application retrieves the most relevant document chunks and generates context-aware responses using Groq’s LLaMA-based language model, while maintaining conversation history for better continuity.

 -> The application runs on Python 3.10 using FastAPI with Uvicorn, securely manages API keys through environment variables, and follows a clean separation between frontend and backend, making it scalable and easy to deploy.

-> Dependencies : 
pip install fastapi uvicorn python-multipart python-dotenv PyPDF2 python-docx faiss-cpu sentence-transformers torch
pip install langchain==0.1.20 langchain-community==0.0.38 langchain-groq langchain-text-splitters

-> running command for backend :uvicorn app:app --reload
->running command for frontend :npm start
