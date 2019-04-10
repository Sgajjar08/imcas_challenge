@extends('index')

@section('content')
<div class="row">
        <div class="col-sm-8 offset-sm-2">
           <h1 class="display-3">Add new Product</h1>
         <div>
           @if ($errors->any())
             <div class="alert alert-danger">
               <ul>
                   @foreach ($errors->all() as $error)
                     <li>{{ $error }}</li>
                   @endforeach
               </ul>
             </div><br />
           @endif
             <form method="post" action="{{ route('products.store') }}">
                 @csrf
                 <div class="form-group">    
                     <label for="name">Product Name:</label>
                     <input type="text" class="form-control" name="name"/>
                 </div>
       
                 <div class="form-group">
                     <label for="type">Product Type:</label>
                     <input type="text" class="form-control" name="type"/>
                 </div>
       
                 <div class="form-group">
                     <label for="price">Price:</label>
                     <input type="number" class="form-control" name="price"/>
                 </div>
                 <div class="form-group">
                     <label for="barcode">Barcode:</label>
                     <input type="number" class="form-control" name="barcode"/>
                 </div>                         
                 <button type="submit" class="btn btn-primary-outline">Add Product</button>
                 <a href="{{ route('products.index')}}" class="btn btn-default"> Back </a>
             </form>
         </div>
       </div>
       </div>
@endsection