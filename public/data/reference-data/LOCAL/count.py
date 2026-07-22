# Open CRS_CT.json and count the number of objects
# This is a python script to count the number of objects in a JSON file

import json

with open('CRS_CT2.json') as json_file:
    data = json.load(json_file)

    # Count the number of objects in the JSON file
    count = len(data["ReferenceData"])

    # Print the count
    print(f"The number of objects in the JSON file is: {count}")