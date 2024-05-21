from odoo import _, fields, models
from odoo.exceptions import UserError

class PosConfig(models.Model):
    _inherit = 'pos.config'

    congratulatory_text = fields.Char(
        string="Congratulatory Text",
        help="Set a congratulory text for your PoS receipt",
    )
