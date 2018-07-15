var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey (object, key) {
  return Object.assign({}, delete object.key)
}

function destructivelyDeleteFromObjectByKey(object, key) {
   var object = { prop: 1 }
   var newObj = destructivelyDeleteFromObjectByKey(object, 'prop');
  
  
  return object[key]
}
