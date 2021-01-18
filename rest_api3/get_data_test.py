import requests
import json
URL = "http://127.0.0.1:8000/stuinfo/"

def get_data(id = None):
    data = {}
    if id is not None:
        data = {'id': id}
    json_data = json.dumps(data)
    r = requests.get(url = URL, data = json_data)
    data = r.json()

    print(data)

# get_data()

URL1 = ""
def post_data():
    data = {
        'name': 'Ravi',
        'roll': 170134,
        'city': 'dhaka'
    }

    json_data = json.dumps(data)
    r = requests.post(url = URL, data=json_data)
    data = r.json()
    print(data)

# post_data()

def update_data():
    data = {
        'id': 11,
        'name': 'Javi',
        'city': 'Ctg'
    }

    json_data = json.dumps(data)
    r = requests.put(url = URL, data=json_data)
    data = r.json()
    print(data)

# update_data()

def delete_data():
    data = {
        'id': 10
    }

    json_data = json.dumps(data)
    r = requests.delete(url = URL, data=json_data)
    data = r.json()
    print(data)
delete_data()