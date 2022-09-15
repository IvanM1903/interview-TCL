from fastapi import File, UploadFile
from pydantic import BaseModel

#This class stores the file sended from the front
class FormData(BaseModel):
    file: UploadFile
    
    @classmethod
    def as_form(
        cls,
        file: UploadFile = File(...)
    ):
        return cls(
            file = file
        )

#This class stores the info that will be send to the front
class FileInfo(BaseModel):
    name: str
    size: int
    mimeType: str