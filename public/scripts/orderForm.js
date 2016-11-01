var OrderItem = React.createClass({
	getInitialState: function() {
		return {selected: -1};
	},

	handleClick: function() {
		var newSelected = -1 * this.state.selected;
		this.setState({selected: newSelected});
		this.props.onOrderClick(newSelected * this.props.item.price);
	},

	render: function() {
		var style = this.state.selected > 0 ? "selected" : "";
		return (
			<tr className={style} onClick={this.handleClick}>
				<td>{this.props.item.name}</td>
				<td>{this.props.cashSign + this.props.item.price.toFixed(2)}</td>
			</tr>
		);
	}
});

var OrderTable = React.createClass({
	getInitialState: function() {
		return {total: 0.00};
	},

	handleClick: function(newItemPrice) {
		this.setState({total: (this.state.total + newItemPrice)});
	}, 

	render: function() {
		var self = this;
		return (
			<div>
				<p className='title'>Our services</p>
				<table>
					<tbody>
						{
							this.props.items.map(function(item, index) {
								return (
									<OrderItem item={item} cashSign={self.props.cashSign} onOrderClick={self.handleClick} />
								);
							})	
						}
						<tr className='total'>
							<td>Total</td>
							<td>{'$' + this.state.total.toFixed(2)}</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}		
});

var ITEMS = [
	{ name: 'Web Development', price: 300 },
    { name: 'Design', price: 400 },
    { name: 'Integration', price: 250 },
    { name: 'Training', price: 220 }
];

ReactDOM.render( 
	<OrderTable items={ITEMS} cashSign={'$'} />,
	document.getElementById('content')
);