@extends('index')

@section('content')
    <div class="row">
        <div class="col-sm-12">
            <h1 class="display-3">Products</h1>
            <form action="/search" method="POST" role="search">
                {{ csrf_field() }}
                <div class="input-group">
                    <input type="text" class="form-control" name="q"
                        placeholder="Search products"> <span class="input-group-btn">
                        <button type="submit" class="btn btn-default">
                            <span class="glyphicon glyphicon-search"></span>
                        </button>
                    </span>
                </div>
            </form>
            <div>
                <a style="margin: 19px;" href="{{ route('products.create')}}" class="btn btn-primary">New Product</a>
            </div>     
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Product Name</td>
                            <td>Type</td>
                            <td>Price</td>
                            <td>Barcode</td>
                            <td colspan = 3>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        @if (count($products) > 0)
                            @foreach($products as $product)
                                <tr>
                                    <td>{{$product->id}}</td>
                                    <td>{{$product->name}}</td>
                                    <td>{{$product->type}}</td>
                                    <td>{{$product->price}}</td>
                                    <td>{{$product->barcode}}</td>
                                    <td>
                                    <a href="{{ route('products.show',$product->id)}}" class="btn btn-info"> View </a>
                                    </td>
                                    <td>
                                        <a href="{{ route('products.edit',$product->id)}}" class="btn btn-primary">Edit</a>
                                    </td>
                                    <td>
                                        <form action="{{ route('products.destroy', $product->id)}}" method="post">
                                        @csrf
                                        @method('DELETE')
                                        <button class="btn btn-danger" type="submit">Delete</button>
                                        </form>
                                    </td>
                                </tr>
                            @endforeach
                        {{ $products->links() }}
                        @else
                            <p> No products found </p>
                    @endif
                </tbody>
            </table>
        <div>
    </div>
@endsection