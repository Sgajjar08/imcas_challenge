<div class="container">
    <h2>Sample Product details</h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            @foreach($products as $product)
            <tr>
                <td>{{$product->name}}</td>
                <td>{{$product->price}}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
    @endif
</div>