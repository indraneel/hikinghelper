mkdir logs;
mkdir static;
virtualenv venv;
source venv/bin/activate;
pip -r req.txt;
gunicorn server:app -b 0.0.0.0:8000;
