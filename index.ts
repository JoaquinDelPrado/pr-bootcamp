export interface DbResponse {
    success: boolean,
    error?: string
}

export interface IDbUpdateResponse<T> extends DbResponse {
    changedRows: T,
}

export interface IDbInsertResponse<T> extends DbResponse {
    insertId: T,
}
export interface IDbDeleteResponse<T> extends DbResponse {
    affectedRows: T,
}

export interface IDbSelectResponse<T> extends DbResponse {
    data: T[]
}

export interface IBaseResponse<T> {
    success: boolean,
    message?: string,
    code?: number,
    data: T
}

export interface IAsignacionFicha {
    id: number;
    fichaId: number;
    userId: number;
}

export interface IComment {
    id: number;
    userId: number;
    createdAt: number;
    fichaId: number;
    comment: string;
}

export interface ICompany {
    id: number;
    rut: string;
    razonSocial: string;
    email: string;
    direccion: string;
    comuna: string;
}

export interface IDocument {
	id: number,
	rut_emisor: string,
	tipo: number,
	folio: number,
	recepcion: Date,
	acuse_recibo: Date,
	reclamo: Date,
	monto_excento: number,
	monto_neto: number,
	monto_iva: number,
	monto_total: number,
	cedido: boolean,
	tipo_pago: string,
	tipo_referencia: number,
	folio_referencia: number,
	almacenado: boolean,
}

export interface ILogEntry {
    id: number,
    category: string,
    action: string,
    user_id: number,
    createdAt: Date,
    foreign_id: number,
    comment: string,
}

export interface IOperation {
	ppryid: number,
	rut_cliente: string,
	ope_num_interno: number,
	fecha_operacion: Date,
	sucursal: string,
	tipo_documento: string,
	estado_operacion: string,
	cantidad_docs: number,
	porc_financiado: number,
	monto_liquido: number
	detalle_operacion: IOperationDetail[]
}

export interface IOperationDetail {
	rut_deudor: string,
	nombre_deudor: string,
	nro_documento: number,
	fecha_emision: Date,
	fecha_vencimiento: Date,
	mov_monto_impu: number,
	estid: number,
	estado_cesion: string
}

export interface IPrioridadFicha {
    id: number;
    description: string;
}

export interface IProfile {
    id: number,
    name: string,
    description?: string
}

export interface IPrivilege {
    id: number,
    name: string,
    description?: string
}

export interface IUser {
    id: number,
    name: string,
    email: string,
    password: string,
    createdAt: Date,
    modifiedAt: Date,
    verificationCode: string,
    cargo: string
}

export interface IAlarm {
    id: number;
    fichaId: number;
    duration: number;
}

export interface IFicha {
	id: number,
	rut_pagador: string,
	pagador: string,
	rut_cliente: string,
	cliente: string,
	comentario: string,
	tipo: string,
	horaregistro: Date,
    assigned_by?: number,
    asignee?: number,
    ficha_priority?: number,
    seen?: number,
    alarm_ts?: Date,
    alarm_duration?: number,
    num_comentarios?: number
};

export interface IDebugInsertFichaParams {
    pagador: string,
    rutPagador: string,
    cliente: string,
    rutCliente: string,
}

export interface IDebugAssignProfileParams {
    userId: number,
    profileId: number
}

export interface IAssignFichaParams {
    id: number
    userId: number
}

export interface ICommentFichaParams {
    id: number
    comment: string
}

export interface IMyIunterface {
    nombre: string,
    edad: number
}

export type priorityOptions = 1 | 2 | 3;