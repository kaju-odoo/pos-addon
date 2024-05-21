/** @odoo-module */

import { Order } from "@point_of_sale/app/store/models";
import { patch } from "@web/core/utils/patch";

// Patch the Order model to include congratulatory_text in the export_for_printing method
patch(Order.prototype, {
    export_for_printing() {
        return {
            ...super.export_for_printing(...arguments),
            congratulatory_text: this.pos.config.congratulatory_text,
        };
    },
});
