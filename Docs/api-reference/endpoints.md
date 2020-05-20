# Endpoints



{% api-method method="post" host="http://localhost:3000" path="/users" %}
{% api-method-summary %}
Create a user 
{% endapi-method-summary %}

{% api-method-description %}
This endpoint allows you to create a new user
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="displayName" type="string" required=true %}
This name will be displayed on the dashboard
{% endapi-method-parameter %}

{% api-method-parameter name="username" type="string" required=true %}
This name is used to log into the dashboard
{% endapi-method-parameter %}

{% api-method-parameter name="imageUrl" type="string" required=true %}
The profile picture image in URL format
{% endapi-method-parameter %}

{% api-method-parameter name="password" type="string" required=true %}
Password of the user
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=201 %}
{% api-method-response-example-description %}
User got created succesfully
{% endapi-method-response-example-description %}

```
{
    "_id": "5e90a984e546c945b5768a19",
    "username": "username",
    "imageUrl": "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    "displayName": "displayname",
    "createdAt": "2020-04-10T17:14:44.081Z",
    "updatedAt": "2020-04-10T17:14:44.081Z",
    "__v": 0
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Could not find a cake matching this query.
{% endapi-method-response-example-description %}

```
{    "message": "Ain't no cake like that."}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="http://localhost:3000" path="/authentication" %}
{% api-method-summary %}
Log the user in
{% endapi-method-summary %}

{% api-method-description %}
This endpoint logs the user in if there credentials are ok.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="strategy" type="string" required=true %}
local of jwt 
{% endapi-method-parameter %}

{% api-method-parameter name="username" type="string" required=true %}
The username of the user
{% endapi-method-parameter %}

{% api-method-parameter name="password" type="string" required=true %}
The password of the user
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "accessToken": "token here",
    "authentication": {
        "strategy": "local"
    },
    "user": {
        "_id": "5e90c6c3778018513d6c26e9",
        "username": "username",
        "displayName": "displayname",
        "imageUrl": "image-link",
        "createdAt": "2020-04-10T19:19:31.574Z",
        "updatedAt": "2020-04-10T19:19:31.574Z",
        "__v": 0
    }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

