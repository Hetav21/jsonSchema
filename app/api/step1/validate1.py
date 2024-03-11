import sys
import json
from jsonschema import validate
from jsonschema.exceptions import ValidationError

with open('schema.json', 'r') as f:
    try:
        schema = json.load(f)
    except json.decoder.JSONDecodeError as e:
        print("Error: Not a valid JSON")
        sys.exit(1)

with open('metaSchema.json', 'r') as f:
    metaSchema = json.load(f)

try: 
    validate(instance=schema, schema=metaSchema)
    print("Success");
except ValidationError as e:
    print("Error: ", e.message)

sys.stdout.flush()