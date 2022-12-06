;(() => {
	let rootElement, rootDomElement

	class Component {}

	const createReactcitoElement = (tagName, props, children) => {
		const domElement = document.createElement(tagName)
		if (props.textContent) domElement.innerText = props.textContent
		children && children.forEach((child) => domElement.appendChild(child))
		return domElement	
	}

	const renderElement = (element, domElement) => {
		rootElement = element
		rootDomElement = domElement
		const currentDom = rootElement.render()
		rootDomElement.appendChild(currentDom)
	}

	window.Component = Component
	window.createElement = createReactcitoElement
	window.Reactcito = {
		render: renderElement
	}
	
})()