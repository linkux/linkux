''' This is a json manipulation tool '''

import os
import json

for file in os.listdir("data"):
    new_json = []
    with open("data/" + file) as f:
        lines_as_json = json.load(f)
        count = len(lines_as_json)
        i = 0
        for json_val in lines_as_json:
            json_val["id"] = count - i - 1
            json_val["show_date"] = False
            new_json.append(json_val)
            i += 1
    with open("data/" + file, "w") as f_out:
        json.dump(new_json, f_out, indent=4, ensure_ascii=False)