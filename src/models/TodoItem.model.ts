import { Model } from "sequelize-typescript";
import { Table, Column, DataType } from "sequelize-typescript";

@Table ({
    tableName: "TodoItem"
})

export default class TodoItem extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        field: "id"
    })
    id?: number;

    @Column({
        type: DataType.STRING,
        field: "title"
    })
    title?: string;

    @Column({
        type: DataType.STRING,
        field: "coupon"
    })
    coupon?: string;

    @Column({
        type: DataType.DOUBLE,
        field: "discount_amount_or_percent"
    })
    discountAmtOrPercent?: number;

    @Column({
        type: DataType.INTEGER,
        field: "quantity"
    })
    quantity?: number;

    @Column({
        type: DataType.DOUBLE,
        field: "item_amount"
    })
    itemAmount?: number;

    @Column({
        type: DataType.TINYINT,
        field: "active"
    })
    active?: boolean;

    @Column({
        type: DataType.TINYINT,
        field: "deleted"
    })
    deleted?: boolean;

    @Column({
        type: DataType.INTEGER,
        field: "todo_id"
    })
    todoId?: number;

}
