import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('hk_accounts')
export class Accountss {

    @PrimaryGeneratedColumn()
    id: string;

    @Column({ name: 'account_id', type: 'bigint', nullable: true })
    account_id: number;

    @Column({ name: 'consumer_id', type: 'bigint', nullable: true })
    consumer_id: number;

    @Column({ name: 'account_nature', nullable: true })
    account_nature: number;

    @Column({ name: 'account_type', nullable: true })
    account_type: string;

    @Column({ name: 'active', nullable: true })
    active: number;

    @Column({ name: 'balance_amount', nullable: true })
    balance_amount: number;

    @Column({ name: 'box_color', nullable: true })
    box_color: string;

    @Column({ name: 'box_icon', nullable: true })
    box_icon: string;

    @Column({ name: 'description', nullable: true })
    description: string;

    @Column({ name: 'flex1', nullable: true })
    flex1: string;

    @Column({ name: 'flex2', nullable: true })
    flex2: string;

    @Column({ name: 'flex3', nullable: true })
    flex3: string;

    @Column({ name: 'flex4', nullable: true })
    flex4: string;

    @Column({ name: 'flex5', nullable: true })
    flex5: string;

    @Column({ name: 'flex6', nullable: true })
    flex6: string;

    @Column({ name: 'gl_account_no', nullable: true })
    gl_account_no: string;

    @Column({ name: 'title', nullable: true })
    title: string;

    @Column({ name: 'opening_balance', nullable: true })
    opening_balance: number;

    @Column({ name: 'record_created_on', nullable: true })
    record_created_on: Date;

    @Column({ name: 'is_sync', nullable: true })
    is_sync: number;

    @Column({ name: 'device_type', nullable: true })
    device_type: string;

    @Column({ name: 'bank_name', nullable: true })
    bank_name: string;

    @Column({ name: 'sys_defined', nullable: true })
    sys_defined: number;

    @Column({ name: 'net_amount_total', nullable: true })
    net_amount_total: number;
}



