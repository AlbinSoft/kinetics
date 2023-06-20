
# Kinetics

Powerfull, Zero-dependecy and Lightweight library to easely do CSS based transitions when user is scrolling down.

## How to use it

Prepare HTML content in it´s stand-by status and some CSS for the transitions you have planned.

```
	.something {
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: opacity 500ms ease-in;
	}
	.something.animate {
		opacity: 1;
	}
	...
	<div class="something">
		Hello world!
	</div>
```

## Documentation

Just add the `data-fires` attribute in the elements that must recieve the `.animate` class.

Possible values are:

* **et_vt** fires when element top reaches viewport top.

* **em_vt** fires when element middle reaches viewport top.

* **eb_vt** fires when element bottom reaches viewport top.

* **et_vm** fires when element top reaches viewport middle.

* **em_vm** fires when element middle reaches viewport middle.

* **eb_vm** fires when element bottom reaches viewport middle.

* **et_vb** fires when element top reaches viewport bottom.

* **em_vb** fires when element middle reaches viewport bottom.

* **eb_vb** fires when element bottom reaches viewport bottom.


## Sample

Look our example at [CodePen](https://codepen.io/albinsoft/pen/XWyJbez)

Or a realworld use [Beyma France](https://www.beyma.fr/a-propos-de/)
