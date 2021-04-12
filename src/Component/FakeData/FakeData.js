var FakeData = {
    "total": 4,
    "stocks": [
        {
            "id": 1,
            "sellPrice": "100.00",
            "purchasePrice": "80.00",
            "discount": "0.00",
            "quantity": 30,
            "validity": "2021-12-12T00:00:00.000Z",
            "ProductId": 1,
            "ShopId": 1,
            "Product": {
                "id": 1,
                "name": "Diamond ring",
                "image": "http://localhost:3500/api/product/image/006ed6b1bd06-image.jpg",
                "details": "Full diamong ring",
                "SubcategoryId": 1,
                "Subcategory": {
                    "id": 1,
                    "name": "Ring",
                    "CategoryId": 1,
                    "Category": {
                        "id": 1,
                        "name": "Jwellery"
                    }
                },
                "Tags": [
                    {
                        "id": 1,
                        "name": "Jwel",
                        "TagOfProduct": {
                            "ProductId": 1,
                            "TagId": 1
                        }
                    },
                    {
                        "id": 2,
                        "name": "Ring",
                        "TagOfProduct": {
                            "ProductId": 1,
                            "TagId": 2
                        }
                    }
                ]
            }
        },
        {
            "id": 2,
            "sellPrice": "30000.00",
            "purchasePrice": "25000.00",
            "discount": "2000.00",
            "quantity": 2,
            "validity": null,
            "ProductId": 2,
            "ShopId": 1,
            "Product": {
                "id": 2,
                "name": "Galaxy note 10",
                "image": "http://localhost:3500/api/product/image/Samsung-Galaxy-Note-10-500x500.jpg",
                "details": "Samsung Smart phone",
                "SubcategoryId": 3,
                "Subcategory": {
                    "id": 3,
                    "name": "Mobile",
                    "CategoryId": 3,
                    "Category": {
                        "id": 3,
                        "name": "Gadget"
                    }
                },
                "Tags": []
            }
        },
        {
            "id": 3,
            "sellPrice": "10000.00",
            "purchasePrice": "8000.00",
            "discount": "1500.00",
            "quantity": 4,
            "validity": null,
            "ProductId": 3,
            "ShopId": 1,
            "Product": {
                "id": 3,
                "name": "Apple watch",
                "image": "http://localhost:3500/api/product/image/42-alu-space-sport-black-nc-1up.png",
                "details": "Smart Watch",
                "SubcategoryId": 4,
                "Subcategory": {
                    "id": 4,
                    "name": "Watch",
                    "CategoryId": 3,
                    "Category": {
                        "id": 3,
                        "name": "Gadget"
                    }
                },
                "Tags": []
            }
        },
        {
            "id": 4,
            "sellPrice": "10000.00",
            "purchasePrice": "8000.00",
            "discount": "1500.00",
            "quantity": 4,
            "validity": null,
            "ProductId": 3,
            "ShopId": 1,
            "Product": {
                "id": 4,
                "name": "Apple watch",
                "image": "http://localhost:3500/api/product/image/42-alu-space-sport-black-nc-1up.png",
                "details": "Smart Watch",
                "SubcategoryId": 4,
                "Subcategory": {
                    "id": 4,
                    "name": "Watch",
                    "CategoryId": 3,
                    "Category": {
                        "id": 3,
                        "name": "Gadget"
                    }
                },
                "Tags": []
            }
        },
    ]
}
export default FakeData;