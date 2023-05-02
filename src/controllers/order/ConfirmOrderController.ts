import {Request, Response } from 'express'
import { ConfirmOrderService } from '../../services/order/ConfirmOrderService'

class ConfirmOrderController{
  async handle(req: Request, res: Response){
    const { order_id } = req.body;

    const confirmOrderService = new ConfirmOrderService();

    const order = await confirmOrderService.execute({
      order_id
    })

    return res.json(order);

  }
}

export { ConfirmOrderController }