@extends('index')

@section('content')
<a href="{{ route('products.index')}}" class="btn btn-default"> Back </a>
    <h1>{{$product->name}}</h1>
    <ul>
        <li>{{$product->name}}</li>
        <li>{{$product->type}}</li>
        <li>{{$product->price}}</li>
        <li>{{$product->barcode}}</li>
    </ul>
@endsection