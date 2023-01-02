## Data schema

### Restaurant (Array)
```
{
    id: { type: Number, required: true },
    name: { type: String, required: true },
    site: { type: String },
    phone: { type: String },
    address: { type: String },
    line: { type: String, required: true },
    mrt: { type: String, required: true },
    rating: { type: Number },
    tag: [{ type: String }],
    img: { type: String },
    time: { type: Schema.Types.Mixed },
    distance: { type: String },
    walktime: { type: String },
    regular: [{ type: String }],
    limited: [{ type: String }]
}
```

### Comment (Array)
```
{
    restaurantId: { type: Number, required: true },
    author: { type: String, required: true },
    text: { type: String },
    imgurl: { type: String },
    rating: { type: String }
}
```

### Post (Array)
```
{
    restaurantId: { type: Number, required: true },
    writer: { type: String, required: true },
    content: { type: String },
    time: { type: String },
    url: { type: String }
}
```
