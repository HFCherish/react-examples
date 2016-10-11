var LikeButton = React.createClass({
	getInitialState: function() {
		return {liked: false};
	},

	handleClick: function(e) {
		this.setState({liked: !this.state.liked});
	},

	render: function() {
		var text = this.state.liked ? "liked" : "haven\'t like";
		return (
			<div onClick={this.handleClick}>
				you {text} this. Click here to toggle.
			</div>	 
		);
	}
});

ReactDOM.render(
	<LikeButton />,
	document.getElementById('content')
);