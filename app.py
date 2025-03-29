from flask import Flask, render_template, request, jsonify
import json
import os

app = Flask(__name__)

# Load product data from JSON file
def load_products():
    with open('static/data/products.json', 'r') as file:
        return json.load(file)

@app.route('/')
def index():
    products = load_products()
    categories = [
        {"id": "aac-blocks", "name": "AAC Blocks"},
        {"id": "iron", "name": "Iron & Steel"},
        {"id": "sand", "name": "Sand & Aggregates"},
        {"id": "hardware", "name": "Hardware Items"},
        {"id": "tiles", "name": "Tiles & Flooring"},
        {"id": "tappees", "name": "Tappees & Faucets"},
        {"id": "bathtubs", "name": "Bath Tubs"}
    ]
    return render_template('index.html', products=products, categories=categories)

@app.route('/products/<category>')
def products_by_category(category):
    products = load_products()
    filtered_products = [p for p in products if p['category_id'] == category]
    return render_template('products.html', products=filtered_products, category=category)

@app.route('/product/<int:product_id>')
def product_detail(product_id):
    products = load_products()
    product = next((p for p in products if p['id'] == product_id), None)
    if product:
        return render_template('product_detail.html', product=product)
    return render_template('404.html'), 404

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        # In a real application, you would process the form data here
        # For this example, we'll just return a success message
        return render_template('contact_success.html')
    return render_template('contact.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True)

