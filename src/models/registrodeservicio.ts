import { Schema, Types, model, Model } from "mongoose";
import { RegistrarServ } from "../interfaces/registrodeservicio"

const RegServSchema = new Schema<RegistrarServ>(
    {
        idUser:{
            type: String,
            required: true
        },
        nombreConductor: {
            type: String,
            required: true
        },
        apellidoConductor: {
            type: String,
            required: true
        },
        rut: {
            type: String,
            required: true
        },
        empresa: {
            type: String,
            required: true
        },
        tractomarca: {
            type: String,
            required: true
        },
        tractomodelo: {
            type: String,
            required: true
        },
        tractopatente: {
            type: String,
            required: true
        },
        semimarca:{
            type: String,
            required: true
        },
        semimodelo:{
            type: String,
            required: true
        },
        semitipo:{
            type: String,
            required: true
        },
        tipoServicios: {
            type: String,
            required: true
        },
        cliente:{
            type: String,
            required: true
        },
        lugapresentacionPT1:{
            type:String,
            required: true
        },
        fechapresentacionPT1:{
            type:Date,
            required: true
        },
        horapresentacionPT1: {
            type: Date,
            required: true
        },
        numeroguia:{
            type:String,
            required: true
        },
        cargatipocontenedor:{
            type: String,
            required: true
        },
        carganumerocontenedor:{
            type: String,
            required: true
        },
        cargasello:{
            type: String,
            required: true
        },
        tipocontenedor:{
            type: String,
            required: true
        },
        numerocontenedor:{
            type: String,
            required: true
        },
        sello: {
            type: String,
            required: true
        },
        lugarpresetacionPT2:{
            type: String,
            required: true
        },
        fechacarga_descarga:{
            type:Date,
            required: true
        },
        horapresentacionPT2:{
            type:Date,
            required: true
        },
        fechapresentacionPT3:{
            type: Date,
            required: true
        },
        horapresentacionPT3:{
            type:Date,
            required: true
        },
        agregarvuelta:{
            type: String,
            required: true
        }    
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const RegistrarServ = model("registroServicios", RegServSchema);
export default RegistrarServ;

