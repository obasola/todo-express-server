import { Model } from "sequelize-typescript";
import { Table, Column, DataType } from "sequelize-typescript";

@Table ({
    tableName: "Users"
})

export default class User extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id"
    })
    id?: number;

    @Column({
        type: DataType.STRING,
        field: "fname"
    })
    firstName?: string;

    @Column({
        type: DataType.STRING,
        field: "lname"
    })
    lastName?: string;

    @Column({
        type: DataType.STRING,
        field: "password"
    })
    password?: string;

    @Column({
        type: DataType.STRING,
        field: "email_address"
    })
    emailAddress?: string;

    @Column({
        type: DataType.BOOLEAN,
        field: "active"
    })
    active?: boolean;

    @Column({
        type: DataType.BOOLEAN,
        field: "deleted"
    })
    deleted?: boolean;

}
