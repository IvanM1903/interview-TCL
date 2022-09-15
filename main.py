from fastapi import Depends, FastAPI, Request, UploadFile
from fastapi.middleware.cors import CORSMiddleware

from schemas import FormData, FileInfo

app = FastAPI()

# Establish the origins where requests will be allowed
origins = [
    "http://localhost:4200",
    "http://localhost:8080",
]
#Set the CORS settings to allow the origins setted before
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

"""
@Parameters: 
    formData: Object sent from the client
    request: Request object
    
@Return:
    FileInfo object
"""
@app.post("/formdata")
async def postDataFile(formData: FormData = Depends(FormData.as_form)):
    try:
        fs = await formData.file.read()
        await formData.file.seek(0) #get back the file pointer to the beggining of the file
        return handleFileInfo(formData.file, len(fs))
    except FileNotFoundError:
        msg = "File does not exist."
        print(msg)
        raise
    

#This function retrieve the info from the file received
def handleFileInfo(file: UploadFile, fileSize: int):

    return FileInfo(name=file.filename,
                    mimeType=file.content_type,
                    size=fileSize)
