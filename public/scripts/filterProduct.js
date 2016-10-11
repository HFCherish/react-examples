var ProductRow = React.createClass({
	render: function() {
		var name = this.props.product.stocked ? 
					this.props.product.name : 
					<span style={{color:'red'}}>{this.props.product.name}</span>;

		return (
			<tr>
				<td>{name}</td>
				<td>{this.props.product.price}</td>
			</tr>
		);
	}
});

var CategoryRow = React.createClass({
	render: function() {
		return (
			<tr>
				<th colSpan="2">{this.props.category}</th>
			</tr>
		);
	}
});

var ProductList = React.createClass({
	render: function() {
		var lastCategory = null;
		var rows = [];
		this.props.products.forEach(product => {
			if(product.name.indexOf(this.props.filterText)===-1 || (this.props.isInStock && !product.stocked)) return;
			if(product.category != lastCategory) {
				rows.push(
					<CategoryRow category={product.category} key={product.category} />
				);
			}
			rows.push(
				<ProductRow product={product} key={product.name} />
			);
			lastCategory = product.category;
		});

		return (
			<table>
				<thead><tr><th>name</th><th>price</th></tr></thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
});

var SearchBar = React.createClass({
	handleFilterChange: function(e) {
		this.props.onFilterChange(e.target.value);
	},

	handleStockChange: function(e) {
		this.props.onStockChange(e.target.checked);
	},

	render: function() {
		return (
			<div>
				<input type="text" value={this.props.filterText} onChange={this.handleFilterChange} placeholder="input the filter text" />
				<p>
					<input type="checkbox" checked={this.props.isInStock} onChange={this.handleStockChange} />
					{'  '}
					Only show products in stock.
				</p>
			</div>
		);
	}
});

var FilterableProductTable = React.createClass({
	getInitialState: function() {
		return {filterText:'', isInStock: false};
	},

	handleStockChange: function(isInStock) {
		this.setState({isInStock: isInStock});
	},

	handleFilterChange: function(filterText) {
		this.setState({filterText: filterText});
	},

	render: function() {
		return (
			<div>
				<SearchBar filterText={this.state.filterText} isInStock={this.state.isInStock} onFilterChange={this.handleFilterChange} onStockChange={this.handleStockChange} />
				<ProductList products={this.props.products} filterText={this.state.filterText} isInStock={this.state.isInStock} />
			</div>
		);
	}
});

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];


ReactDOM.render(
	<FilterableProductTable products={PRODUCTS} />,
	document.getElementById('content')
);



