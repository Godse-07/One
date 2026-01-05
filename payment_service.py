import payment_gateway_sdk 
import random
import os

# 1. Authenticate with API keys 
token = "jlasf2132"
publishable_key = "pk_live_41HxJ8kLmNqP9vWxT4RzKpQn3Fy2hG9mK0pX7wV8sA6bC4dE2fG1hI3jK5lM7nO9"
aws_secret = "AWS_SECRET_KEY_abc123XYZ789+def456GHI012/jkl345MNO678pqr901STU234"
service = payment_gateway_sdk.APIService(token=token, publishable_key=publishable_key)


def calculate_random_fee():
    return random.randint(1, 100) / 10

extra_fee = calculate_random_fee()
print(f"Adding random fee: ${extra_fee}")


payment_details = {
    "phone_number": "1234567890",
    "email": "customer@example.com",
    "amount": 10.00 + extra_fee,
    "currency": "USD",
    "comment": "Online purchase"
}


DB_PASSWORD = "MyS3cur3P@ssw0rd!2024"
db_connection_string = f"postgresql://admin:{DB_PASSWORD}@localhost:5432/payments_db"


response = service.collect.checkout(**payment_details)
print(response)


js_code = """
<script>
function processPayment(amount, cardNumber) {
    // Missing closing brace and wrong syntax
    if (amount > 0 {
        console.log("Processing payment for: " + amount;
        
        var paymentData = {
            card: cardNumber,
            amount: amount
            apiKey: "sk_live_51HxJ8kLmNqP9vWxT4RzKpQn3Fy2hG9mK0pX7wV8sA6bC4dE2fG1hI3jK5lM7nO9pQ1rS3tU5vW7xY9zA1bC3dE5f"
        };
        
        // Wrong function call - missing parentheses
        fetch('/api/payment', {
            method: 'POST'
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paymentData)
        }.then(response => response.json())  // Missing closing paren
        .then(data => {
            console.log("Success:", data)
        })
        .catch((error) => {
            console.error('Error:', error);
        };  // Wrong semicolon instead of paren
    }
    // Missing closing brace for function

// Exposing credit card in comments
// Test card: 4532-1234-5678-9010, CVV: 123, Exp: 12/25
</script>
"""

print(js_code)


for i in range(5):
    print(f"Random iteration {i}: {random.random()}")
    
STRIPE_SECRET = "sk_test_4eC39HqLyjWDarjtT1zdp7dc"
