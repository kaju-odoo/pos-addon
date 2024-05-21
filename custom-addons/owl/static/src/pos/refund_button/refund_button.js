/** @odoo-module */

import { usePos } from "@point_of_sale/app/store/pos_hook";
import { ProductScreen } from "@point_of_sale/app/screens/product_screen/product_screen";
import { Component } from "@odoo/owl";

export class ClearButton extends Component {
    static template = "point_of_sale.ClearButton";

    setup() {
        this.pos = usePos();
    }
    get currentOrder() {
        return this.pos.get_order();
    }
    click() {
        const selectedLine = this.currentOrder.get_selected_orderline();
        this.currentOrder.removeOrderline(selectedLine);
    }
}

ProductScreen.addControlButton({
    component: ClearButton,
    condition: function () {
        return true;
    },
});
