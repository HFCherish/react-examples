var SearchBar = React.createClass({
	handleChange: function(e) {
		this.props.onSearchChange(e.target.value);
	},

	render: function() {
		return (
			<div>
				<input value={this.props.searchInput} placeholder='Type here' onChange={this.handleChange} />
			</div>
		);
	}
});

var WebList = React.createClass({
	render: function() {
		var self = this;
		return (
			<table>
				<tbody>
						{
							this.props.urls.map(function(website, index) {
								var searchInput = self.props.searchInput.trim().toLowerCase();
								if( website.name.indexOf(searchInput) >= 0 )
									return (
										<tr>
											<td>{website.name}</td>
											<td><a href={website.url}>{website.url}</a></td>
										</tr>
									);
							})
						}
				</tbody>
			</table>
		);
	}
});

var RTSearchBox = React.createClass({
	getInitialState: function() {
		return {searchInput: ""};
	},

	handleSearchChange: function(newInput) {
		this.setState({searchInput: newInput});
	},

	render: function() {
		return (
			<div>
				<SearchBar searchInput={this.state.searchInput} onSearchChange={this.handleSearchChange} />
				<WebList searchInput={this.state.searchInput} urls={this.props.urls} />			
			</div>
		);
	}
});

var URLS = [
	{ name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},
];

ReactDOM.render(
	<RTSearchBox urls={URLS} />,
	document.getElementById('content')
);