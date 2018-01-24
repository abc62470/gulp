import $ from "jquery";

class contact {
	constructor(el) {
		this.showEl = $(".showID-hook");
		this.closeEl = $(".popup-hook .popup-close");
	}

	start() {
		this.showPopup();
		this.closePopup();
	}

	showPopup() {
		this.showEl.on("click", function (e) {
			$(".popup-hook").show();
		})
	}

	closePopup() {
		this.closeEl.on("click", function (e) {
			console.log("this");
			$(this).parents(".popup-hook").hide();
		})
	}
}

export default contact;