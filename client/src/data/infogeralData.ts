// Filosofia visual aplicada neste arquivo: Swiss Corporate Brutalism editorial.
// Este arquivo é gerado automaticamente por carregar_infogeral.py a partir do Excel INFOGERAL.
// Não edite manualmente os dados abaixo; rode novamente: python3 carregar_infogeral.py --excel /caminho/INFOGERAL.xlsx

export type Colaborador = {
  id: string;
  codigo: string | number | null;
  carimbo: string | number | null;
  carimboNumero: number | null;
  nome: string | null;
  nomeCompleto: string | null;
  setor: string | null;
  linhaExcel: number;
  origem: string;
};

export type Peca = {
  id: string;
  nome: string | null;
  codigo: string | number | null;
  linhaExcel: number;
  origem: string;
};

export const infogeralData = {
  "metadata": {
    "arquivoOrigem": "/home/ubuntu/upload/INFOGERAL.xlsx",
    "geradoEm": "2026-04-29T19:37:52",
    "totalAbas": 8,
    "abas": [
      "Busca rapida",
      "PEÇAS",
      "COD",
      "Geral Cod",
      "Esmaltação",
      "Inspção P. Pequenas",
      "Fundição",
      "Classificação"
    ],
    "totalColaboradores": 100,
    "totalPecas": 30,
    "setores": {
      "Fundição": 49,
      "Esmaltação": 13,
      "Classificação": 24,
      "Inspeção Peças Pequenas": 14
    },
    "tipos": {
      "3": 59,
      "11": 38,
      "0": 2
    },
    "menorCarimboNumerico": 0,
    "maiorCarimboNumerico": 2421,
    "nomesDuplicados": [
      "MARCELO"
    ],
    "observacao": "A aba Geral Cod foi usada como cadastro mestre. As abas setoriais foram preservadas como detalhamento operacional e todas as abas brutas foram mantidas em rawSheets."
  },
  "colaboradores": [
    {
      "id": "colab-001",
      "codigo": 2148,
      "carimbo": 1,
      "carimboNumero": 1,
      "nome": "VALDEIR",
      "nomeCompleto": "VALDEIR RODRIGUES DE MACEDO",
      "setor": "Fundição",
      "linhaExcel": 2,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-002",
      "codigo": 653,
      "carimbo": "101 (2)",
      "carimboNumero": 101,
      "nome": "Pedro Henri",
      "nomeCompleto": "PEDRO HENRIQUE DA SILVA FLABILIO",
      "setor": "Fundição",
      "linhaExcel": 3,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-003",
      "codigo": 1923,
      "carimbo": 3,
      "carimboNumero": 3,
      "nome": "ADILSON",
      "nomeCompleto": "ADILSON RAMOS",
      "setor": "Fundição",
      "linhaExcel": 4,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-004",
      "codigo": 1150,
      "carimbo": 4,
      "carimboNumero": 4,
      "nome": "ADEMILSOM",
      "nomeCompleto": "ADEMILSON ROSA DOS SANTOS",
      "setor": "Fundição",
      "linhaExcel": 5,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-005",
      "codigo": 1000,
      "carimbo": 5,
      "carimboNumero": 5,
      "nome": "DURVAL",
      "nomeCompleto": "DURVAL FERREIRA DE CARVALHO",
      "setor": "Fundição",
      "linhaExcel": 6,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-006",
      "codigo": 2094,
      "carimbo": 7,
      "carimboNumero": 7,
      "nome": "ANTONIA",
      "nomeCompleto": "ANTONIA ERINALDA VIANA DE FRANCA",
      "setor": "Fundição",
      "linhaExcel": 7,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-007",
      "codigo": 2319,
      "carimbo": 8,
      "carimboNumero": 8,
      "nome": "MARCOS",
      "nomeCompleto": "MARCOS JORGE DA SILVA",
      "setor": "Fundição",
      "linhaExcel": 8,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-008",
      "codigo": 2240,
      "carimbo": 10,
      "carimboNumero": 10,
      "nome": "ANTONIO NASCIMENTO",
      "nomeCompleto": "ANTONIO DO NASCIMENTO",
      "setor": "Fundição",
      "linhaExcel": 9,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-009",
      "codigo": 2415,
      "carimbo": 11,
      "carimboNumero": 11,
      "nome": "OTAVIO",
      "nomeCompleto": "OTAVIO MACHADO MANSO",
      "setor": "Fundição",
      "linhaExcel": 10,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-010",
      "codigo": 2314,
      "carimbo": 12,
      "carimboNumero": 12,
      "nome": "CALEME",
      "nomeCompleto": "CALEME OZALVO",
      "setor": "Fundição",
      "linhaExcel": 11,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-011",
      "codigo": 2264,
      "carimbo": 13,
      "carimboNumero": 13,
      "nome": "JOSE SEVERINO",
      "nomeCompleto": "JOSE SEVERINO DOS SANTOS",
      "setor": "Fundição",
      "linhaExcel": 12,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-012",
      "codigo": 2267,
      "carimbo": 14,
      "carimboNumero": 14,
      "nome": "MILTON",
      "nomeCompleto": "MILTON AUGUSTO DA SILVA",
      "setor": "Fundição",
      "linhaExcel": 13,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-013",
      "codigo": 813,
      "carimbo": 15,
      "carimboNumero": 15,
      "nome": "RODRIGO",
      "nomeCompleto": "RODRIGO DE JESUS BRITO",
      "setor": "Fundição",
      "linhaExcel": 14,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-014",
      "codigo": 2381,
      "carimbo": 16,
      "carimboNumero": 16,
      "nome": "JACIRON",
      "nomeCompleto": "JACIRON ALVES DOS SANTOS",
      "setor": "Fundição",
      "linhaExcel": 15,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-015",
      "codigo": 778,
      "carimbo": "109 (17)",
      "carimboNumero": 109,
      "nome": "WALTER S",
      "nomeCompleto": "WALTER SOARES DE SOUSA",
      "setor": "Fundição",
      "linhaExcel": 16,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-016",
      "codigo": 2368,
      "carimbo": 18,
      "carimboNumero": 18,
      "nome": "MARCELO",
      "nomeCompleto": "MARCELO DE OLIVEIRA DOS REIS",
      "setor": "Fundição",
      "linhaExcel": 17,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-017",
      "codigo": 804,
      "carimbo": "112 (20)",
      "carimboNumero": 112,
      "nome": "Charles",
      "nomeCompleto": "CHARLES LIMA FERREIRA",
      "setor": "Fundição",
      "linhaExcel": 18,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-018",
      "codigo": 344,
      "carimbo": 21,
      "carimboNumero": 21,
      "nome": "Marcos",
      "nomeCompleto": "MARCO TULIO FIRMINO DA SILVA",
      "setor": "Fundição",
      "linhaExcel": 19,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-019",
      "codigo": 2444,
      "carimbo": 22,
      "carimboNumero": 22,
      "nome": "ANDRE SANTOS",
      "nomeCompleto": "ANDRE DOS SANTOS",
      "setor": "Fundição",
      "linhaExcel": 20,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-020",
      "codigo": 2439,
      "carimbo": 23,
      "carimboNumero": 23,
      "nome": "RICARDO",
      "nomeCompleto": "RICARDO GOMES DE SOUSA",
      "setor": "Fundição",
      "linhaExcel": 21,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-021",
      "codigo": 826,
      "carimbo": "113 (24)",
      "carimboNumero": 113,
      "nome": "LUCAS L",
      "nomeCompleto": "LUCAS DE OLIVEIRA LIMA",
      "setor": "Fundição",
      "linhaExcel": 22,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-022",
      "codigo": 2485,
      "carimbo": 26,
      "carimboNumero": 26,
      "nome": "MACIEL",
      "nomeCompleto": "MACIEL ROBERTO DOS SANTOS",
      "setor": "Fundição",
      "linhaExcel": 23,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-023",
      "codigo": 2483,
      "carimbo": 27,
      "carimboNumero": 27,
      "nome": "CARLOS",
      "nomeCompleto": "CARLOS CORREIA DOS SANTOS",
      "setor": "Fundição",
      "linhaExcel": 24,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-024",
      "codigo": 345,
      "carimbo": 28,
      "carimboNumero": 28,
      "nome": "JOAO B",
      "nomeCompleto": "JOAO BATISTA CONCEIÇÃO OLIVEIRA",
      "setor": "Fundição",
      "linhaExcel": 25,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-025",
      "codigo": 2285,
      "carimbo": 30,
      "carimboNumero": 30,
      "nome": "FABRICIO",
      "nomeCompleto": "FABRICIO GALDEL SANTOS GOMES",
      "setor": "Fundição",
      "linhaExcel": 26,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-026",
      "codigo": 2513,
      "carimbo": 31,
      "carimboNumero": 31,
      "nome": "NYLTON",
      "nomeCompleto": "NYLTON CESAR BERNARDO DA SILVA",
      "setor": "Fundição",
      "linhaExcel": 27,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-027",
      "codigo": 1446,
      "carimbo": 32,
      "carimboNumero": 32,
      "nome": "TEREZA",
      "nomeCompleto": "TEREZA CRISTINA FERNANDES",
      "setor": "Fundição",
      "linhaExcel": 28,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-028",
      "codigo": 1033,
      "carimbo": 34,
      "carimboNumero": 34,
      "nome": "NILTON",
      "nomeCompleto": "NILTON CESAR ALVES BARBOSA",
      "setor": "Fundição",
      "linhaExcel": 29,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-029",
      "codigo": 2111,
      "carimbo": 36,
      "carimboNumero": 36,
      "nome": "DALZIRIA",
      "nomeCompleto": "DALZIRIA DA SILVA LIMA",
      "setor": "Fundição",
      "linhaExcel": 30,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-030",
      "codigo": 2561,
      "carimbo": 37,
      "carimboNumero": 37,
      "nome": "RAFAEL",
      "nomeCompleto": "RAFAEL CARVALHO DA SILVA SARAIVA",
      "setor": "Fundição",
      "linhaExcel": 31,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-031",
      "codigo": 2503,
      "carimbo": 38,
      "carimboNumero": 38,
      "nome": "HUMBERTO",
      "nomeCompleto": "HUMBERTO ALEXANDRE DOS SANTOS",
      "setor": "Fundição",
      "linhaExcel": 32,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-032",
      "codigo": 2566,
      "carimbo": 40,
      "carimboNumero": 40,
      "nome": "ALEXSANDRO",
      "nomeCompleto": "ALEXSANDRO SANTOS DO NASCIMENTO",
      "setor": "Fundição",
      "linhaExcel": 33,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-033",
      "codigo": 2573,
      "carimbo": 41,
      "carimboNumero": 41,
      "nome": "CORNELIO",
      "nomeCompleto": "CORNELIO JOSE CARDOSO",
      "setor": "Fundição",
      "linhaExcel": 34,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-034",
      "codigo": 2578,
      "carimbo": 42,
      "carimboNumero": 42,
      "nome": "WILLIAN",
      "nomeCompleto": "WILLIAN ALVES CAMPOZANO",
      "setor": "Fundição",
      "linhaExcel": 35,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-035",
      "codigo": 2580,
      "carimbo": 43,
      "carimboNumero": 43,
      "nome": "DEIVSON",
      "nomeCompleto": "DEIVSON NASARENO SILVA",
      "setor": "Fundição",
      "linhaExcel": 36,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-036",
      "codigo": 2583,
      "carimbo": 44,
      "carimboNumero": 44,
      "nome": "MARIA",
      "nomeCompleto": "MARIA DO SOCORRO CRISPIN BARRETO DA SILV",
      "setor": "Fundição",
      "linhaExcel": 37,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-037",
      "codigo": 2585,
      "carimbo": 45,
      "carimboNumero": 45,
      "nome": "DIEGO",
      "nomeCompleto": "DIEGO ALVES DE OLIVEIRA",
      "setor": "Fundição",
      "linhaExcel": 38,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-038",
      "codigo": 2590,
      "carimbo": 48,
      "carimboNumero": 48,
      "nome": "FABIANO",
      "nomeCompleto": "FABIANO EUSTAQUIO DA LUZ",
      "setor": "Fundição",
      "linhaExcel": 39,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-039",
      "codigo": 46,
      "carimbo": 54,
      "carimboNumero": 54,
      "nome": "ADLET",
      "nomeCompleto": "ADLET GUILLOME",
      "setor": "Fundição",
      "linhaExcel": 40,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-040",
      "codigo": 246,
      "carimbo": 60,
      "carimboNumero": 60,
      "nome": "Clebeson",
      "nomeCompleto": "CLEBSON OLIVEIRA NASCIMENTO",
      "setor": "Fundição",
      "linhaExcel": 41,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-041",
      "codigo": 272,
      "carimbo": 79,
      "carimboNumero": 79,
      "nome": "Paulo R",
      "nomeCompleto": "PAULO RICARDO PEREIRA DE SOUSA",
      "setor": "Fundição",
      "linhaExcel": 42,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-042",
      "codigo": 444,
      "carimbo": 81,
      "carimboNumero": 81,
      "nome": "DERICK",
      "nomeCompleto": "DERICK LOUGAN DE SOUSA SANTOS",
      "setor": "Fundição",
      "linhaExcel": 43,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-043",
      "codigo": 459,
      "carimbo": 83,
      "carimboNumero": 83,
      "nome": "ADEILSON",
      "nomeCompleto": "ADEILSON SOUSA",
      "setor": "Fundição",
      "linhaExcel": 44,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-044",
      "codigo": 451,
      "carimbo": 84,
      "carimboNumero": 84,
      "nome": "MARLON",
      "nomeCompleto": "MARLON GLEISON DA CONCEIÇÃO SILVA",
      "setor": "Fundição",
      "linhaExcel": 45,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-045",
      "codigo": 337,
      "carimbo": 85,
      "carimboNumero": 85,
      "nome": "Gardone",
      "nomeCompleto": "GARDONE CONCEIÇÃO DA SILVA",
      "setor": "Fundição",
      "linhaExcel": 46,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-046",
      "codigo": 522,
      "carimbo": 87,
      "carimboNumero": 87,
      "nome": "MISAEL",
      "nomeCompleto": "MISAEL FONTINELE DA SILVA SOUSA",
      "setor": "Fundição",
      "linhaExcel": 47,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-047",
      "codigo": 2522,
      "carimbo": 90,
      "carimboNumero": 90,
      "nome": "ALEXANDRE",
      "nomeCompleto": "ALEXANDRE HENRIQUE DOS SANTOS",
      "setor": "Fundição",
      "linhaExcel": 48,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-048",
      "codigo": 552,
      "carimbo": 91,
      "carimboNumero": 91,
      "nome": "MARCIEL",
      "nomeCompleto": "MACIEL DOS SANTOS ARAUJO",
      "setor": "Fundição",
      "linhaExcel": 49,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-049",
      "codigo": 612,
      "carimbo": 98,
      "carimboNumero": 98,
      "nome": "MARCOS L",
      "nomeCompleto": "MARCOS JULIO LOPES",
      "setor": "Fundição",
      "linhaExcel": 50,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-050",
      "codigo": 1992,
      "carimbo": 2,
      "carimboNumero": 2,
      "nome": "DORVACY",
      "nomeCompleto": "DORVACY FARIAS FERREIRA",
      "setor": "Esmaltação",
      "linhaExcel": 51,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-051",
      "codigo": 239,
      "carimbo": 11,
      "carimboNumero": 11,
      "nome": "ALEXANDRE B",
      "nomeCompleto": "ALEXANDRE BAPTISTA ROCHA",
      "setor": "Esmaltação",
      "linhaExcel": 52,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-052",
      "codigo": 400,
      "carimbo": 21,
      "carimboNumero": 21,
      "nome": "LEONADO B",
      "nomeCompleto": "LEONARDO BITENCOURT SOARES",
      "setor": "Esmaltação",
      "linhaExcel": 53,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-053",
      "codigo": 1599,
      "carimbo": 3,
      "carimboNumero": 3,
      "nome": "PAULO",
      "nomeCompleto": "PAULO BRAGAS MACIEL",
      "setor": "Esmaltação",
      "linhaExcel": 54,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-054",
      "codigo": 745,
      "carimbo": 26,
      "carimboNumero": 26,
      "nome": "ARTHUR",
      "nomeCompleto": "ARTHUR BATISTA DOS SANTOS",
      "setor": "Esmaltação",
      "linhaExcel": 55,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-055",
      "codigo": 2421,
      "carimbo": 2421,
      "carimboNumero": 2421,
      "nome": "IDGLAN",
      "nomeCompleto": "IDGLAN",
      "setor": "Esmaltação",
      "linhaExcel": 56,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-056",
      "codigo": 750,
      "carimbo": 27,
      "carimboNumero": 27,
      "nome": "ALEXSANDER",
      "nomeCompleto": "ALEXSANDER CORREIA DA SILVA FERREIRA",
      "setor": "Esmaltação",
      "linhaExcel": 57,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-057",
      "codigo": 2366,
      "carimbo": 6,
      "carimboNumero": 6,
      "nome": "RIVALDO",
      "nomeCompleto": "RIVALDO DO CARMO CAMPOS SILVA",
      "setor": "Esmaltação",
      "linhaExcel": 58,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-058",
      "codigo": 836,
      "carimbo": 28,
      "carimboNumero": 28,
      "nome": "VICTOR DO V",
      "nomeCompleto": "VICTOR DO VALLE DA CONCEIÇÃO",
      "setor": "Esmaltação",
      "linhaExcel": 59,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-059",
      "codigo": 690,
      "carimbo": 25,
      "carimboNumero": 25,
      "nome": "GUSTAVO",
      "nomeCompleto": "GUSTAVO VINICIUS DA SILVA SOUZA",
      "setor": "Esmaltação",
      "linhaExcel": 60,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-060",
      "codigo": "NOVATO",
      "carimbo": "NOVATO",
      "carimboNumero": null,
      "nome": "LUIS GUSTAVO",
      "nomeCompleto": "LUIS GUSTAVO",
      "setor": "Esmaltação",
      "linhaExcel": 61,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-061",
      "codigo": 841,
      "carimbo": 29,
      "carimboNumero": 29,
      "nome": "BRENNO ASSIS",
      "nomeCompleto": "BRENNO ASSIS BARBANTINI DA SILVA",
      "setor": "Esmaltação",
      "linhaExcel": 62,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-062",
      "codigo": 2353,
      "carimbo": 4,
      "carimboNumero": 4,
      "nome": "Weslei",
      "nomeCompleto": "WESLEI FRANCISCO DOS SANTOS",
      "setor": "Esmaltação",
      "linhaExcel": 63,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-063",
      "codigo": 1460,
      "carimbo": 1,
      "carimboNumero": 1,
      "nome": "MARIZA",
      "nomeCompleto": "MARIZA MARIA MARTINS DE ARAUJO",
      "setor": "Classificação",
      "linhaExcel": 64,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-064",
      "codigo": 2327,
      "carimbo": 6,
      "carimboNumero": 6,
      "nome": "KATHREIN",
      "nomeCompleto": "KATHREIN MARTINS EVANGELISTA",
      "setor": "Classificação",
      "linhaExcel": 65,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-065",
      "codigo": 1746,
      "carimbo": 7,
      "carimboNumero": 7,
      "nome": "CYNTHIA",
      "nomeCompleto": "CYNTHIA CRISTINA TOMAS MATIAS FERREIRA",
      "setor": "Classificação",
      "linhaExcel": 66,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-066",
      "codigo": 2344,
      "carimbo": 7,
      "carimboNumero": 7,
      "nome": "ELAINE CRISTINA",
      "nomeCompleto": "ELAINE CRISTINA DE JESUS",
      "setor": "Classificação",
      "linhaExcel": 67,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-067",
      "codigo": 1342,
      "carimbo": 10,
      "carimboNumero": 10,
      "nome": "VALDIR",
      "nomeCompleto": "VALDIR PEDRO DA SILVA",
      "setor": "Classificação",
      "linhaExcel": 68,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-068",
      "codigo": 2397,
      "carimbo": 11,
      "carimboNumero": 11,
      "nome": "Ana Cleia",
      "nomeCompleto": "ANA CLEA RODRIGUES DE SOUSA",
      "setor": "Classificação",
      "linhaExcel": 69,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-069",
      "codigo": 2434,
      "carimbo": 15,
      "carimboNumero": 15,
      "nome": "ISAQUE",
      "nomeCompleto": "IZAQUE SILVA DOS SANTOS",
      "setor": "Classificação",
      "linhaExcel": 70,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-070",
      "codigo": 2526,
      "carimbo": 17,
      "carimboNumero": 17,
      "nome": "JORGE",
      "nomeCompleto": "JORGE ANTONIO RODRIGUES JUNIOR",
      "setor": "Classificação",
      "linhaExcel": 71,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-071",
      "codigo": 2532,
      "carimbo": 18,
      "carimboNumero": 18,
      "nome": "LUCAS",
      "nomeCompleto": "LUCAS VIEIRA FELICIANO",
      "setor": "Classificação",
      "linhaExcel": 72,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-072",
      "codigo": 2541,
      "carimbo": 19,
      "carimboNumero": 19,
      "nome": "MARCELO",
      "nomeCompleto": "MARCELO FRANCISCO LEAL",
      "setor": "Classificação",
      "linhaExcel": 73,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-073",
      "codigo": 2547,
      "carimbo": 20,
      "carimboNumero": 20,
      "nome": "ALEXANDRO",
      "nomeCompleto": "ALEXANDRO MAIA",
      "setor": "Classificação",
      "linhaExcel": 74,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-074",
      "codigo": 2557,
      "carimbo": 21,
      "carimboNumero": 21,
      "nome": "Alessandra",
      "nomeCompleto": "ALESSANDRA MARIA COSTA MULLER",
      "setor": "Classificação",
      "linhaExcel": 75,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-075",
      "codigo": 2558,
      "carimbo": 22,
      "carimboNumero": 22,
      "nome": "Maria Luzia",
      "nomeCompleto": "MARIA LUZIA DA COSTA",
      "setor": "Classificação",
      "linhaExcel": 76,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-076",
      "codigo": 2142,
      "carimbo": 32,
      "carimboNumero": 32,
      "nome": "VALDA",
      "nomeCompleto": "VALDA HELENA DA SILVA",
      "setor": "Classificação",
      "linhaExcel": 77,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-077",
      "codigo": 2496,
      "carimbo": 34,
      "carimboNumero": 34,
      "nome": "MARIA ADRIANA",
      "nomeCompleto": "MARIA ADRIANA DE SOUSA SANTOS",
      "setor": "Classificação",
      "linhaExcel": 78,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-078",
      "codigo": 2560,
      "carimbo": 35,
      "carimboNumero": 35,
      "nome": "ALCEANE DA CONCEICAO",
      "nomeCompleto": "ALCEANE DA CONCEICAO",
      "setor": "Classificação",
      "linhaExcel": 79,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-079",
      "codigo": 2620,
      "carimbo": 40,
      "carimboNumero": 40,
      "nome": "MAGNO",
      "nomeCompleto": "MAGNO ROSENO DE MELO SILVA",
      "setor": "Classificação",
      "linhaExcel": 80,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-080",
      "codigo": 243,
      "carimbo": 46,
      "carimboNumero": 46,
      "nome": "LINDOMAR",
      "nomeCompleto": "LINDOMAR PEREIRA DA SILVA",
      "setor": "Classificação",
      "linhaExcel": 81,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-081",
      "codigo": 513,
      "carimbo": 53,
      "carimboNumero": 53,
      "nome": "KELLY",
      "nomeCompleto": "KELLY FABIANA LUIS",
      "setor": "Classificação",
      "linhaExcel": 82,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-082",
      "codigo": 619,
      "carimbo": 62,
      "carimboNumero": 62,
      "nome": "ALYNNI",
      "nomeCompleto": "ALYNNI CRISTINA DE FREITAS LEMES",
      "setor": "Classificação",
      "linhaExcel": 83,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-083",
      "codigo": 763,
      "carimbo": 75,
      "carimboNumero": 75,
      "nome": "MARCIA AUG",
      "nomeCompleto": "MARCIA AUGUSTA GONTIJO DA SILVA",
      "setor": "Classificação",
      "linhaExcel": 84,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-084",
      "codigo": 764,
      "carimbo": 76,
      "carimboNumero": 76,
      "nome": "CARLOS H",
      "nomeCompleto": "CARLOS HENRIQUE SILVA PEREIRA",
      "setor": "Classificação",
      "linhaExcel": 85,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-085",
      "codigo": 802,
      "carimbo": 77,
      "carimboNumero": 77,
      "nome": "Mikael",
      "nomeCompleto": "MIKAEL EVERSON SILVA DE OLIVEIRA",
      "setor": "Classificação",
      "linhaExcel": 86,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-086",
      "codigo": 825,
      "carimbo": 78,
      "carimboNumero": 78,
      "nome": "Nilson",
      "nomeCompleto": "NILSON OLIVEIRA NEVES",
      "setor": "Classificação",
      "linhaExcel": 87,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-087",
      "codigo": 415,
      "carimbo": 74,
      "carimboNumero": 74,
      "nome": "LUCIANA",
      "nomeCompleto": "LUCIANA INACIA DA SILVA",
      "setor": "Inspeção Peças Pequenas",
      "linhaExcel": 88,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-088",
      "codigo": 2209,
      "carimbo": 53,
      "carimboNumero": 53,
      "nome": "Adelia",
      "nomeCompleto": "ADELIA APARECIDA GOMES PEREIRA",
      "setor": "Inspeção Peças Pequenas",
      "linhaExcel": 89,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-089",
      "codigo": 1860,
      "carimbo": 0,
      "carimboNumero": 0,
      "nome": "Marilda Brito",
      "nomeCompleto": "Marilda Brito",
      "setor": "Inspeção Peças Pequenas",
      "linhaExcel": 90,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-090",
      "codigo": 1821,
      "carimbo": 57,
      "carimboNumero": 57,
      "nome": "Ivana",
      "nomeCompleto": "IVANA DIRLENE DA SILVA",
      "setor": "Inspeção Peças Pequenas",
      "linhaExcel": 91,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-091",
      "codigo": 2489,
      "carimbo": 49,
      "carimboNumero": 49,
      "nome": "Maria R",
      "nomeCompleto": "MARIA RAIMUNDA GONCALVES DA SILVA",
      "setor": "Inspeção Peças Pequenas",
      "linhaExcel": 92,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-092",
      "codigo": 1598,
      "carimbo": 55,
      "carimboNumero": 55,
      "nome": "Marilda",
      "nomeCompleto": "MARILDA ANTONIA DOS REIS VALERIO",
      "setor": "Inspeção Peças Pequenas",
      "linhaExcel": 93,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-093",
      "codigo": 712,
      "carimbo": 88,
      "carimboNumero": 88,
      "nome": "MARIA F",
      "nomeCompleto": "MARIA DE FATIMA GOMES DE SALES",
      "setor": "Inspeção Peças Pequenas",
      "linhaExcel": 94,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-094",
      "codigo": 1693,
      "carimbo": 61,
      "carimboNumero": 61,
      "nome": "Marcia",
      "nomeCompleto": "MARCIA HELENA CANDIDO",
      "setor": "Inspeção Peças Pequenas",
      "linhaExcel": 95,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-095",
      "codigo": 408,
      "carimbo": 73,
      "carimboNumero": 73,
      "nome": "ERIKA",
      "nomeCompleto": "ERIKA LOPES DOS SANTOS",
      "setor": "Inspeção Peças Pequenas",
      "linhaExcel": 96,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-096",
      "codigo": 542,
      "carimbo": 78,
      "carimboNumero": 78,
      "nome": "Camila",
      "nomeCompleto": "CAMILA PEREIRA DE SOUSA",
      "setor": "Inspeção Peças Pequenas",
      "linhaExcel": 97,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-097",
      "codigo": 2297,
      "carimbo": 54,
      "carimboNumero": 54,
      "nome": "Maria N",
      "nomeCompleto": "MARIA NILZA VIANA SANTOS",
      "setor": "Inspeção Peças Pequenas",
      "linhaExcel": 98,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-098",
      "codigo": 603,
      "carimbo": 85,
      "carimboNumero": 85,
      "nome": "Maria Silva",
      "nomeCompleto": "MARIA SILVA LIMA FERREIRA",
      "setor": "Inspeção Peças Pequenas",
      "linhaExcel": 99,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-099",
      "codigo": 859,
      "carimbo": 90,
      "carimboNumero": 90,
      "nome": "Valquiria",
      "nomeCompleto": "VALQUIRIA ROCHA BARBOSA DA CRUZ",
      "setor": "Inspeção Peças Pequenas",
      "linhaExcel": 100,
      "origem": "Geral Cod"
    },
    {
      "id": "colab-100",
      "codigo": 736,
      "carimbo": 91,
      "carimboNumero": 91,
      "nome": "Aprendiz 1",
      "nomeCompleto": "Aprendiz 1 (INSP)",
      "setor": "Inspeção Peças Pequenas",
      "linhaExcel": 101,
      "origem": "Geral Cod"
    }
  ],
  "detalhesPorSetor": {
    "Fundição": [
      {
        "tipo": 3,
        "codigo": 2148,
        "carimbo": 1,
        "nome": "Valdeir",
        "nomeCompleto": "VALDEIR RODRIGUES DE MACEDO",
        "linhaExcel": 3,
        "id": "fundição-001",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 1
      },
      {
        "tipo": 11,
        "codigo": 653,
        "carimbo": "101 (2)",
        "nome": "Pedro Henri",
        "nomeCompleto": "PEDRO HENRIQUE DA SILVA FLABILIO",
        "linhaExcel": 4,
        "id": "fundição-002",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 101
      },
      {
        "tipo": 3,
        "codigo": 1923,
        "carimbo": 3,
        "nome": "Adilson",
        "nomeCompleto": "ADILSON RAMOS",
        "linhaExcel": 5,
        "id": "fundição-003",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 3
      },
      {
        "tipo": 3,
        "codigo": 1150,
        "carimbo": 4,
        "nome": "Ademilsom",
        "nomeCompleto": "ADEMILSON ROSA DOS SANTOS",
        "linhaExcel": 6,
        "id": "fundição-004",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 4
      },
      {
        "tipo": 3,
        "codigo": 1000,
        "carimbo": 5,
        "nome": "Durval",
        "nomeCompleto": "DURVAL FERREIRA DE CARVALHO",
        "linhaExcel": 7,
        "id": "fundição-005",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 5
      },
      {
        "tipo": 3,
        "codigo": 2094,
        "carimbo": 7,
        "nome": "Antonia",
        "nomeCompleto": "ANTONIA ERINALDA VIANA DE FRANCA",
        "linhaExcel": 8,
        "id": "fundição-006",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 7
      },
      {
        "tipo": 3,
        "codigo": 2319,
        "carimbo": 8,
        "nome": "Marcos",
        "nomeCompleto": "MARCOS JORGE DA SILVA",
        "linhaExcel": 9,
        "id": "fundição-007",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 8
      },
      {
        "tipo": 3,
        "codigo": 2240,
        "carimbo": 10,
        "nome": "Antonio Nascimento",
        "nomeCompleto": "ANTONIO DO NASCIMENTO",
        "linhaExcel": 10,
        "id": "fundição-008",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 10
      },
      {
        "tipo": 3,
        "codigo": 2415,
        "carimbo": 11,
        "nome": "Otávio",
        "nomeCompleto": "OTAVIO MACHADO MANSO",
        "linhaExcel": 11,
        "id": "fundição-009",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 11
      },
      {
        "tipo": 3,
        "codigo": 2314,
        "carimbo": 12,
        "nome": "Caleme",
        "nomeCompleto": "CALEME OZALVO",
        "linhaExcel": 12,
        "id": "fundição-010",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 12
      },
      {
        "tipo": 3,
        "codigo": 2264,
        "carimbo": 13,
        "nome": "Jose Severino",
        "nomeCompleto": "JOSE SEVERINO DOS SANTOS",
        "linhaExcel": 13,
        "id": "fundição-011",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 13
      },
      {
        "tipo": 3,
        "codigo": 2267,
        "carimbo": 14,
        "nome": "Milton",
        "nomeCompleto": "MILTON AUGUSTO DA SILVA",
        "linhaExcel": 14,
        "id": "fundição-012",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 14
      },
      {
        "tipo": 11,
        "codigo": 813,
        "carimbo": 15,
        "nome": "Rodrigo",
        "nomeCompleto": "RODRIGO DE JESUS BRITO",
        "linhaExcel": 15,
        "id": "fundição-013",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 15
      },
      {
        "tipo": 3,
        "codigo": 2381,
        "carimbo": 16,
        "nome": "Jaciron",
        "nomeCompleto": "JACIRON ALVES DOS SANTOS",
        "linhaExcel": 16,
        "id": "fundição-014",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 16
      },
      {
        "tipo": 11,
        "codigo": 778,
        "carimbo": "109 (17)",
        "nome": "Walter",
        "nomeCompleto": "WALTER SOARES DE SOUSA",
        "linhaExcel": 17,
        "id": "fundição-015",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 109
      },
      {
        "tipo": 3,
        "codigo": 2368,
        "carimbo": 18,
        "nome": "Marcelo",
        "nomeCompleto": "MARCELO DE OLIVEIRA DOS REIS",
        "linhaExcel": 18,
        "id": "fundição-016",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 18
      },
      {
        "tipo": 11,
        "codigo": 804,
        "carimbo": "112 (20)",
        "nome": "Charles",
        "nomeCompleto": "CHARLES LIMA FERREIRA",
        "linhaExcel": 19,
        "id": "fundição-017",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 112
      },
      {
        "tipo": 11,
        "codigo": 344,
        "carimbo": 21,
        "nome": "Marcos",
        "nomeCompleto": "MARCO TULIO FIRMINO DA SILVA",
        "linhaExcel": 20,
        "id": "fundição-018",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 21
      },
      {
        "tipo": 3,
        "codigo": 2444,
        "carimbo": 22,
        "nome": "Andre Santos",
        "nomeCompleto": "ANDRE DOS SANTOS",
        "linhaExcel": 21,
        "id": "fundição-019",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 22
      },
      {
        "tipo": 3,
        "codigo": 2439,
        "carimbo": 23,
        "nome": "Ricardo",
        "nomeCompleto": "RICARDO GOMES DE SOUSA",
        "linhaExcel": 22,
        "id": "fundição-020",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 23
      },
      {
        "tipo": 11,
        "codigo": 826,
        "carimbo": "113 (24)",
        "nome": "Lucas",
        "nomeCompleto": "LUCAS DE OLIVEIRA LIMA",
        "linhaExcel": 23,
        "id": "fundição-021",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 113
      },
      {
        "tipo": 3,
        "codigo": 2485,
        "carimbo": 26,
        "nome": "Maciel",
        "nomeCompleto": "MACIEL ROBERTO DOS SANTOS",
        "linhaExcel": 24,
        "id": "fundição-022",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 26
      },
      {
        "tipo": 3,
        "codigo": 2483,
        "carimbo": 27,
        "nome": "Carlos",
        "nomeCompleto": "CARLOS CORREIA DOS SANTOS",
        "linhaExcel": 25,
        "id": "fundição-023",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 27
      },
      {
        "tipo": 11,
        "codigo": 345,
        "carimbo": 28,
        "nome": "Joao B",
        "nomeCompleto": "JOAO BATISTA CONCEIÇÃO OLIVEIRA",
        "linhaExcel": 26,
        "id": "fundição-024",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 28
      },
      {
        "tipo": 3,
        "codigo": 2285,
        "carimbo": 30,
        "nome": "Fabricio",
        "nomeCompleto": "FABRICIO GALDEL SANTOS GOMES",
        "linhaExcel": 27,
        "id": "fundição-025",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 30
      },
      {
        "tipo": 3,
        "codigo": 2513,
        "carimbo": 31,
        "nome": "Nylton",
        "nomeCompleto": "NYLTON CESAR BERNARDO DA SILVA",
        "linhaExcel": 28,
        "id": "fundição-026",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 31
      },
      {
        "tipo": 3,
        "codigo": 1446,
        "carimbo": 32,
        "nome": "Tereza",
        "nomeCompleto": "TEREZA CRISTINA FERNANDES",
        "linhaExcel": 29,
        "id": "fundição-027",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 32
      },
      {
        "tipo": 3,
        "codigo": 1033,
        "carimbo": 34,
        "nome": "Nilton",
        "nomeCompleto": "NILTON CESAR ALVES BARBOSA",
        "linhaExcel": 30,
        "id": "fundição-028",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 34
      },
      {
        "tipo": 3,
        "codigo": 2111,
        "carimbo": 36,
        "nome": "Dalziria",
        "nomeCompleto": "DALZIRIA DA SILVA LIMA",
        "linhaExcel": 31,
        "id": "fundição-029",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 36
      },
      {
        "tipo": 3,
        "codigo": 2561,
        "carimbo": 37,
        "nome": "Rafael",
        "nomeCompleto": "RAFAEL CARVALHO DA SILVA SARAIVA",
        "linhaExcel": 32,
        "id": "fundição-030",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 37
      },
      {
        "tipo": 3,
        "codigo": 2503,
        "carimbo": 38,
        "nome": "Humberto",
        "nomeCompleto": "HUMBERTO ALEXANDRE DOS SANTOS",
        "linhaExcel": 33,
        "id": "fundição-031",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 38
      },
      {
        "tipo": 3,
        "codigo": 2566,
        "carimbo": 40,
        "nome": "Alexsandro",
        "nomeCompleto": "ALEXSANDRO SANTOS DO NASCIMENTO",
        "linhaExcel": 34,
        "id": "fundição-032",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 40
      },
      {
        "tipo": 3,
        "codigo": 2573,
        "carimbo": 41,
        "nome": "Cornelio",
        "nomeCompleto": "CORNELIO JOSE CARDOSO",
        "linhaExcel": 35,
        "id": "fundição-033",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 41
      },
      {
        "tipo": 3,
        "codigo": 2578,
        "carimbo": 42,
        "nome": "Willian",
        "nomeCompleto": "WILLIAN ALVES CAMPOZANO",
        "linhaExcel": 36,
        "id": "fundição-034",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 42
      },
      {
        "tipo": 3,
        "codigo": 2580,
        "carimbo": 43,
        "nome": "Deivson",
        "nomeCompleto": "DEIVSON NASARENO SILVA",
        "linhaExcel": 37,
        "id": "fundição-035",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 43
      },
      {
        "tipo": 3,
        "codigo": 2583,
        "carimbo": 44,
        "nome": "Maria",
        "nomeCompleto": "MARIA DO SOCORRO CRISPIN BARRETO DA SILV",
        "linhaExcel": 38,
        "id": "fundição-036",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 44
      },
      {
        "tipo": 3,
        "codigo": 2585,
        "carimbo": 45,
        "nome": "Diego",
        "nomeCompleto": "DIEGO ALVES DE OLIVEIRA",
        "linhaExcel": 39,
        "id": "fundição-037",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 45
      },
      {
        "tipo": 3,
        "codigo": 2590,
        "carimbo": 48,
        "nome": "Fabiano",
        "nomeCompleto": "FABIANO EUSTAQUIO DA LUZ",
        "linhaExcel": 40,
        "id": "fundição-038",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 48
      },
      {
        "tipo": 11,
        "codigo": 46,
        "carimbo": 54,
        "nome": "Adlet",
        "nomeCompleto": "ADLET GUILLOME",
        "linhaExcel": 41,
        "id": "fundição-039",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 54
      },
      {
        "tipo": 11,
        "codigo": 246,
        "carimbo": 60,
        "nome": "Clebeson",
        "nomeCompleto": "CLEBSON OLIVEIRA NASCIMENTO",
        "linhaExcel": 42,
        "id": "fundição-040",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 60
      },
      {
        "tipo": 11,
        "codigo": 272,
        "carimbo": 79,
        "nome": "Paulo",
        "nomeCompleto": "PAULO RICARDO PEREIRA DE SOUSA",
        "linhaExcel": 43,
        "id": "fundição-041",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 79
      },
      {
        "tipo": 11,
        "codigo": 444,
        "carimbo": 81,
        "nome": "Derick",
        "nomeCompleto": "DERICK LOUGAN DE SOUSA SANTOS",
        "linhaExcel": 44,
        "id": "fundição-042",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 81
      },
      {
        "tipo": 11,
        "codigo": 459,
        "carimbo": 83,
        "nome": "Adeilson",
        "nomeCompleto": "ADEILSON SOUSA",
        "linhaExcel": 45,
        "id": "fundição-043",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 83
      },
      {
        "tipo": 11,
        "codigo": 451,
        "carimbo": 84,
        "nome": "Marlon",
        "nomeCompleto": "MARLON GLEISON DA CONCEIÇÃO SILVA",
        "linhaExcel": 46,
        "id": "fundição-044",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 84
      },
      {
        "tipo": 11,
        "codigo": 337,
        "carimbo": 85,
        "nome": "Gardone",
        "nomeCompleto": "GARDONE CONCEIÇÃO DA SILVA",
        "linhaExcel": 47,
        "id": "fundição-045",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 85
      },
      {
        "tipo": 11,
        "codigo": 522,
        "carimbo": 87,
        "nome": "Misael",
        "nomeCompleto": "MISAEL FONTINELE DA SILVA SOUSA",
        "linhaExcel": 48,
        "id": "fundição-046",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 87
      },
      {
        "tipo": 3,
        "codigo": 2522,
        "carimbo": 90,
        "nome": "Alexandre",
        "nomeCompleto": "ALEXANDRE HENRIQUE DOS SANTOS",
        "linhaExcel": 49,
        "id": "fundição-047",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 90
      },
      {
        "tipo": 11,
        "codigo": 552,
        "carimbo": 91,
        "nome": "Marciel",
        "nomeCompleto": "MACIEL DOS SANTOS ARAUJO",
        "linhaExcel": 50,
        "id": "fundição-048",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 91
      },
      {
        "tipo": 11,
        "codigo": 612,
        "carimbo": 98,
        "nome": "Marcos",
        "nomeCompleto": "MARCOS JULIO LOPES",
        "linhaExcel": 51,
        "id": "fundição-049",
        "setor": "Fundição",
        "origem": "Fundição",
        "carimboNumero": 98
      }
    ],
    "Classificação": [
      {
        "tipo": 3,
        "codigo": 1460,
        "carimbo": 1,
        "nome": "Mariza",
        "nomeCompleto": "MARIZA MARIA MARTINS DE ARAUJO",
        "linhaExcel": 3,
        "id": "classificação-001",
        "setor": "Classificação",
        "origem": "Classificação",
        "carimboNumero": 1
      },
      {
        "tipo": 3,
        "codigo": 2327,
        "carimbo": 6,
        "nome": "Kathrein",
        "nomeCompleto": "KATHREIN MARTINS EVANGELISTA",
        "linhaExcel": 4,
        "id": "classificação-002",
        "setor": "Classificação",
        "origem": "Classificação",
        "carimboNumero": 6
      },
      {
        "tipo": 3,
        "codigo": 1746,
        "carimbo": 7,
        "nome": "Cynthia",
        "nomeCompleto": "CYNTHIA CRISTINA TOMAS MATIAS FERREIRA",
        "linhaExcel": 5,
        "id": "classificação-003",
        "setor": "Classificação",
        "origem": "Classificação",
        "carimboNumero": 7
      },
      {
        "tipo": 3,
        "codigo": 2344,
        "carimbo": 7,
        "nome": "Elaine Cristina",
        "nomeCompleto": "ELAINE CRISTINA DE JESUS",
        "linhaExcel": 6,
        "id": "classificação-004",
        "setor": "Classificação",
        "origem": "Classificação",
        "carimboNumero": 7
      },
      {
        "tipo": 3,
        "codigo": 1342,
        "carimbo": 10,
        "nome": "Valdir",
        "nomeCompleto": "VALDIR PEDRO DA SILVA",
        "linhaExcel": 7,
        "id": "classificação-005",
        "setor": "Classificação",
        "origem": "Classificação",
        "carimboNumero": 10
      },
      {
        "tipo": 3,
        "codigo": 2397,
        "carimbo": 11,
        "nome": "Ana Cleia",
        "nomeCompleto": "ANA CLEA RODRIGUES DE SOUSA",
        "linhaExcel": 8,
        "id": "classificação-006",
        "setor": "Classificação",
        "origem": "Classificação",
        "carimboNumero": 11
      },
      {
        "tipo": 3,
        "codigo": 2434,
        "carimbo": 15,
        "nome": "Isaque",
        "nomeCompleto": "IZAQUE SILVA DOS SANTOS",
        "linhaExcel": 9,
        "id": "classificação-007",
        "setor": "Classificação",
        "origem": "Classificação",
        "carimboNumero": 15
      },
      {
        "tipo": 3,
        "codigo": 2526,
        "carimbo": 17,
        "nome": "Jorge",
        "nomeCompleto": "JORGE ANTONIO RODRIGUES JUNIOR",
        "linhaExcel": 10,
        "id": "classificação-008",
        "setor": "Classificação",
        "origem": "Classificação",
        "carimboNumero": 17
      },
      {
        "tipo": 3,
        "codigo": 2532,
        "carimbo": 18,
        "nome": "Lucas",
        "nomeCompleto": "LUCAS VIEIRA FELICIANO",
        "linhaExcel": 11,
        "id": "classificação-009",
        "setor": "Classificação",
        "origem": "Classificação",
        "carimboNumero": 18
      },
      {
        "tipo": 3,
        "codigo": 2541,
        "carimbo": 19,
        "nome": "Marcelo",
        "nomeCompleto": "MARCELO FRANCISCO LEAL",
        "linhaExcel": 12,
        "id": "classificação-010",
        "setor": "Classificação",
        "origem": "Classificação",
        "carimboNumero": 19
      },
      {
        "tipo": 3,
        "codigo": 2547,
        "carimbo": 20,
        "nome": "Alexandro",
        "nomeCompleto": "ALEXANDRO MAIA",
        "linhaExcel": 13,
        "id": "classificação-011",
        "setor": "Classificação",
        "origem": "Classificação",
        "carimboNumero": 20
      },
      {
        "tipo": 3,
        "codigo": 2557,
        "carimbo": 21,
        "nome": "Alessandra",
        "nomeCompleto": "ALESSANDRA MARIA COSTA MULLER",
        "linhaExcel": 14,
        "id": "classificação-012",
        "setor": "Classificação",
        "origem": "Classificação",
        "carimboNumero": 21
      },
      {
        "tipo": 3,
        "codigo": 2558,
        "carimbo": 22,
        "nome": "Maria Luzia",
        "nomeCompleto": "MARIA LUZIA DA COSTA",
        "linhaExcel": 15,
        "id": "classificação-013",
        "setor": "Classificação",
        "origem": "Classificação",
        "carimboNumero": 22
      },
      {
        "tipo": 3,
        "codigo": 2142,
        "carimbo": 32,
        "nome": "Valda",
        "nomeCompleto": "VALDA HELENA DA SILVA",
        "linhaExcel": 16,
        "id": "classificação-014",
        "setor": "Classificação",
        "origem": "Classificação",
        "carimboNumero": 32
      },
      {
        "tipo": 3,
        "codigo": 2496,
        "carimbo": 34,
        "nome": "Maria Adriana",
        "nomeCompleto": "MARIA ADRIANA DE SOUSA SANTOS",
        "linhaExcel": 17,
        "id": "classificação-015",
        "setor": "Classificação",
        "origem": "Classificação",
        "carimboNumero": 34
      },
      {
        "tipo": 3,
        "codigo": 2560,
        "carimbo": 35,
        "nome": "Alceane da Conceicao",
        "nomeCompleto": "ALCEANE DA CONCEICAO",
        "linhaExcel": 18,
        "id": "classificação-016",
        "setor": "Classificação",
        "origem": "Classificação",
        "carimboNumero": 35
      },
      {
        "tipo": 3,
        "codigo": 2620,
        "carimbo": 40,
        "nome": "Magno",
        "nomeCompleto": "MAGNO ROSENO DE MELO SILVA",
        "linhaExcel": 19,
        "id": "classificação-017",
        "setor": "Classificação",
        "origem": "Classificação",
        "carimboNumero": 40
      },
      {
        "tipo": 11,
        "codigo": 243,
        "carimbo": 46,
        "nome": "Lindomar",
        "nomeCompleto": "LINDOMAR PEREIRA DA SILVA",
        "linhaExcel": 20,
        "id": "classificação-018",
        "setor": "Classificação",
        "origem": "Classificação",
        "carimboNumero": 46
      },
      {
        "tipo": 11,
        "codigo": 513,
        "carimbo": 53,
        "nome": "Kelly",
        "nomeCompleto": "KELLY FABIANA LUIS",
        "linhaExcel": 21,
        "id": "classificação-019",
        "setor": "Classificação",
        "origem": "Classificação",
        "carimboNumero": 53
      },
      {
        "tipo": 11,
        "codigo": 619,
        "carimbo": 62,
        "nome": "Alynni",
        "nomeCompleto": "ALYNNI CRISTINA DE FREITAS LEMES",
        "linhaExcel": 22,
        "id": "classificação-020",
        "setor": "Classificação",
        "origem": "Classificação",
        "carimboNumero": 62
      },
      {
        "tipo": 11,
        "codigo": 763,
        "carimbo": 75,
        "nome": "Marcia Aug",
        "nomeCompleto": "MARCIA AUGUSTA GONTIJO DA SILVA",
        "linhaExcel": 23,
        "id": "classificação-021",
        "setor": "Classificação",
        "origem": "Classificação",
        "carimboNumero": 75
      },
      {
        "tipo": 11,
        "codigo": 764,
        "carimbo": 76,
        "nome": "Carlos H",
        "nomeCompleto": "CARLOS HENRIQUE SILVA PEREIRA",
        "linhaExcel": 24,
        "id": "classificação-022",
        "setor": "Classificação",
        "origem": "Classificação",
        "carimboNumero": 76
      },
      {
        "tipo": 11,
        "codigo": 802,
        "carimbo": 77,
        "nome": "Mikael",
        "nomeCompleto": "MIKAEL EVERSON SILVA DE OLIVEIRA",
        "linhaExcel": 25,
        "id": "classificação-023",
        "setor": "Classificação",
        "origem": "Classificação",
        "carimboNumero": 77
      },
      {
        "tipo": 11,
        "codigo": 825,
        "carimbo": 78,
        "nome": "Nilson",
        "nomeCompleto": "NILSON OLIVEIRA NEVES",
        "linhaExcel": 26,
        "id": "classificação-024",
        "setor": "Classificação",
        "origem": "Classificação",
        "carimboNumero": 78
      }
    ],
    "Inspeção Peças Pequenas": [
      {
        "tipo": 11,
        "codigo": 415,
        "carimbo": 74,
        "nome": "LUCIANA",
        "nomeCompleto": "LUCIANA INACIA DA SILVA",
        "linhaExcel": 3,
        "id": "inspeção-peças-pequenas-001",
        "setor": "Inspeção Peças Pequenas",
        "origem": "Inspção P. Pequenas",
        "carimboNumero": 74
      },
      {
        "tipo": 3,
        "codigo": 2209,
        "carimbo": 53,
        "nome": "Adelia",
        "nomeCompleto": "ADELIA APARECIDA GOMES PEREIRA",
        "linhaExcel": 4,
        "id": "inspeção-peças-pequenas-002",
        "setor": "Inspeção Peças Pequenas",
        "origem": "Inspção P. Pequenas",
        "carimboNumero": 53
      },
      {
        "tipo": 0,
        "codigo": 1860,
        "carimbo": 0,
        "nome": "Marilda Brito",
        "nomeCompleto": "Marilda Brito",
        "linhaExcel": 5,
        "id": "inspeção-peças-pequenas-003",
        "setor": "Inspeção Peças Pequenas",
        "origem": "Inspção P. Pequenas",
        "carimboNumero": 0
      },
      {
        "tipo": 3,
        "codigo": 1821,
        "carimbo": 57,
        "nome": "Ivana",
        "nomeCompleto": "IVANA DIRLENE DA SILVA",
        "linhaExcel": 6,
        "id": "inspeção-peças-pequenas-004",
        "setor": "Inspeção Peças Pequenas",
        "origem": "Inspção P. Pequenas",
        "carimboNumero": 57
      },
      {
        "tipo": 3,
        "codigo": 2489,
        "carimbo": 49,
        "nome": "Maria Raimunda",
        "nomeCompleto": "MARIA RAIMUNDA GONCALVES DA SILVA",
        "linhaExcel": 7,
        "id": "inspeção-peças-pequenas-005",
        "setor": "Inspeção Peças Pequenas",
        "origem": "Inspção P. Pequenas",
        "carimboNumero": 49
      },
      {
        "tipo": 3,
        "codigo": 1598,
        "carimbo": 55,
        "nome": "Marilda Brito",
        "nomeCompleto": "MARILDA ANTONIA DOS REIS VALERIO",
        "linhaExcel": 8,
        "id": "inspeção-peças-pequenas-006",
        "setor": "Inspeção Peças Pequenas",
        "origem": "Inspção P. Pequenas",
        "carimboNumero": 55
      },
      {
        "tipo": 11,
        "codigo": 712,
        "carimbo": 88,
        "nome": "MARIA DE FATIMA",
        "nomeCompleto": "MARIA DE FATIMA GOMES DE SALES",
        "linhaExcel": 9,
        "id": "inspeção-peças-pequenas-007",
        "setor": "Inspeção Peças Pequenas",
        "origem": "Inspção P. Pequenas",
        "carimboNumero": 88
      },
      {
        "tipo": 3,
        "codigo": 1693,
        "carimbo": 61,
        "nome": "Márcia",
        "nomeCompleto": "MARCIA HELENA CANDIDO",
        "linhaExcel": 10,
        "id": "inspeção-peças-pequenas-008",
        "setor": "Inspeção Peças Pequenas",
        "origem": "Inspção P. Pequenas",
        "carimboNumero": 61
      },
      {
        "tipo": 11,
        "codigo": 408,
        "carimbo": 73,
        "nome": "ERIKA",
        "nomeCompleto": "ERIKA LOPES DOS SANTOS",
        "linhaExcel": 11,
        "id": "inspeção-peças-pequenas-009",
        "setor": "Inspeção Peças Pequenas",
        "origem": "Inspção P. Pequenas",
        "carimboNumero": 73
      },
      {
        "tipo": 11,
        "codigo": 542,
        "carimbo": 78,
        "nome": "Camila",
        "nomeCompleto": "CAMILA PEREIRA DE SOUSA",
        "linhaExcel": 12,
        "id": "inspeção-peças-pequenas-010",
        "setor": "Inspeção Peças Pequenas",
        "origem": "Inspção P. Pequenas",
        "carimboNumero": 78
      },
      {
        "tipo": 3,
        "codigo": 2297,
        "carimbo": 54,
        "nome": "Maria N",
        "nomeCompleto": "MARIA NILZA VIANA SANTOS",
        "linhaExcel": 13,
        "id": "inspeção-peças-pequenas-011",
        "setor": "Inspeção Peças Pequenas",
        "origem": "Inspção P. Pequenas",
        "carimboNumero": 54
      },
      {
        "tipo": 11,
        "codigo": 603,
        "carimbo": 85,
        "nome": "Maria Silva",
        "nomeCompleto": "MARIA SILVA LIMA FERREIRA",
        "linhaExcel": 14,
        "id": "inspeção-peças-pequenas-012",
        "setor": "Inspeção Peças Pequenas",
        "origem": "Inspção P. Pequenas",
        "carimboNumero": 85
      },
      {
        "tipo": 11,
        "codigo": 859,
        "carimbo": 90,
        "nome": "Valquiria",
        "nomeCompleto": "VALQUIRIA ROCHA BARBOSA DA CRUZ",
        "linhaExcel": 15,
        "id": "inspeção-peças-pequenas-013",
        "setor": "Inspeção Peças Pequenas",
        "origem": "Inspção P. Pequenas",
        "carimboNumero": 90
      },
      {
        "tipo": 11,
        "codigo": 736,
        "carimbo": 91,
        "nome": "Aprendiz 1",
        "nomeCompleto": "Aprendiz 1 (INSP)",
        "linhaExcel": 16,
        "id": "inspeção-peças-pequenas-014",
        "setor": "Inspeção Peças Pequenas",
        "origem": "Inspção P. Pequenas",
        "carimboNumero": 91
      }
    ],
    "Esmaltação": [
      {
        "tipo": 3,
        "codigo": 1992,
        "carimbo": 2,
        "nome": "Dorvacy",
        "nomeCompleto": "DORVACY FARIAS FERREIRA",
        "linhaExcel": 3,
        "id": "esmaltação-001",
        "setor": "Esmaltação",
        "origem": "Esmaltação",
        "carimboNumero": 2
      },
      {
        "tipo": 11,
        "codigo": 239,
        "carimbo": 11,
        "nome": "Alexandre",
        "nomeCompleto": "ALEXANDRE BAPTISTA ROCHA",
        "linhaExcel": 4,
        "id": "esmaltação-002",
        "setor": "Esmaltação",
        "origem": "Esmaltação",
        "carimboNumero": 11
      },
      {
        "tipo": 11,
        "codigo": 400,
        "carimbo": 21,
        "nome": "Leonado",
        "nomeCompleto": "LEONARDO BITENCOURT SOARES",
        "linhaExcel": 5,
        "id": "esmaltação-003",
        "setor": "Esmaltação",
        "origem": "Esmaltação",
        "carimboNumero": 21
      },
      {
        "tipo": 3,
        "codigo": 1599,
        "carimbo": 3,
        "nome": "Paulo",
        "nomeCompleto": "PAULO BRAGAS MACIEL",
        "linhaExcel": 6,
        "id": "esmaltação-004",
        "setor": "Esmaltação",
        "origem": "Esmaltação",
        "carimboNumero": 3
      },
      {
        "tipo": 11,
        "codigo": 745,
        "carimbo": 26,
        "nome": "Arthur",
        "nomeCompleto": "ARTHUR BATISTA DOS SANTOS",
        "linhaExcel": 7,
        "id": "esmaltação-005",
        "setor": "Esmaltação",
        "origem": "Esmaltação",
        "carimboNumero": 26
      },
      {
        "tipo": 0,
        "codigo": 2421,
        "carimbo": 2421,
        "nome": "Idglan",
        "nomeCompleto": "IDGLAN",
        "linhaExcel": 8,
        "id": "esmaltação-006",
        "setor": "Esmaltação",
        "origem": "Esmaltação",
        "carimboNumero": 2421
      },
      {
        "tipo": 11,
        "codigo": 750,
        "carimbo": 27,
        "nome": "Alexsander",
        "nomeCompleto": "ALEXSANDER CORREIA DA SILVA FERREIRA",
        "linhaExcel": 9,
        "id": "esmaltação-007",
        "setor": "Esmaltação",
        "origem": "Esmaltação",
        "carimboNumero": 27
      },
      {
        "tipo": 3,
        "codigo": 2366,
        "carimbo": 6,
        "nome": "Rivaldo",
        "nomeCompleto": "RIVALDO DO CARMO CAMPOS SILVA",
        "linhaExcel": 10,
        "id": "esmaltação-008",
        "setor": "Esmaltação",
        "origem": "Esmaltação",
        "carimboNumero": 6
      },
      {
        "tipo": 11,
        "codigo": 836,
        "carimbo": 28,
        "nome": "Victor",
        "nomeCompleto": "VICTOR DO VALLE DA CONCEIÇÃO",
        "linhaExcel": 11,
        "id": "esmaltação-009",
        "setor": "Esmaltação",
        "origem": "Esmaltação",
        "carimboNumero": 28
      },
      {
        "tipo": 11,
        "codigo": 690,
        "carimbo": 25,
        "nome": "Gustavo",
        "nomeCompleto": "GUSTAVO VINICIUS DA SILVA SOUZA",
        "linhaExcel": 12,
        "id": "esmaltação-010",
        "setor": "Esmaltação",
        "origem": "Esmaltação",
        "carimboNumero": 25
      },
      {
        "tipo": 11,
        "codigo": 841,
        "carimbo": 29,
        "nome": "Brenno",
        "nomeCompleto": "BRENNO ASSIS BARBANTINI DA SILVA",
        "linhaExcel": 14,
        "id": "esmaltação-011",
        "setor": "Esmaltação",
        "origem": "Esmaltação",
        "carimboNumero": 29
      },
      {
        "tipo": 3,
        "codigo": 2353,
        "carimbo": 4,
        "nome": "Weslei",
        "nomeCompleto": "WESLEI FRANCISCO DOS SANTOS",
        "linhaExcel": 15,
        "id": "esmaltação-012",
        "setor": "Esmaltação",
        "origem": "Esmaltação",
        "carimboNumero": 4
      }
    ]
  },
  "pecas": [
    {
      "id": "peca-001",
      "nome": "Bacia Convencional - Diva",
      "codigo": "111",
      "linhaExcel": 2,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-002",
      "nome": "Bacia P/ Acoplar - Diva",
      "codigo": "112",
      "linhaExcel": 3,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-003",
      "nome": "Bacia Convencional - Íris",
      "codigo": "116",
      "linhaExcel": 4,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-004",
      "nome": "Bacia P/ Acoplar - Íris",
      "codigo": "117",
      "linhaExcel": 5,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-005",
      "nome": "Bacia P/ Acoplar Acessibilidade",
      "codigo": "120",
      "linhaExcel": 6,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-006",
      "nome": "Bacia Convencional Acessibilidade",
      "codigo": "121",
      "linhaExcel": 7,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-007",
      "nome": "Cuba Oval de embutir (505x385)",
      "codigo": "210",
      "linhaExcel": 8,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-008",
      "nome": "Lavatório médio - Diva",
      "codigo": "211",
      "linhaExcel": 9,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-009",
      "nome": "Cuba Oval de embutir (300x390)",
      "codigo": "213",
      "linhaExcel": 10,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-010",
      "nome": "Modelo Cuba de Apoio Íris - Sem Mesa",
      "codigo": "217",
      "linhaExcel": 11,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-011",
      "nome": "Cuba de Apoio Íris - Com Mesa",
      "codigo": "227",
      "linhaExcel": 12,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-012",
      "nome": "Cuba de Apoio Athena - Sem Mesa (345)",
      "codigo": "247",
      "linhaExcel": 13,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-013",
      "nome": "Cuba de Apoio Athena - Com Mesa (395)",
      "codigo": "237",
      "linhaExcel": 14,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-014",
      "nome": "Cuba de Apoio Aurora (250)",
      "codigo": "250",
      "linhaExcel": 15,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-015",
      "nome": "Cuba de Apoio Zaria",
      "codigo": "270",
      "linhaExcel": 16,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-016",
      "nome": "Cuba de Apoio Dhara Oval",
      "codigo": "260",
      "linhaExcel": 17,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-017",
      "nome": "Cuba Dhara Redonda - (350)",
      "codigo": "230",
      "linhaExcel": 18,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-018",
      "nome": "Cuba Redonda de Embutir (300mm)",
      "codigo": "214",
      "linhaExcel": 19,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-019",
      "nome": "Modelo Cuba de Cabelereiro com Friso",
      "codigo": "222",
      "linhaExcel": 20,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-020",
      "nome": "Cuba Redonda de Embutir Fundida (370mm)",
      "codigo": "212",
      "linhaExcel": 21,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-021",
      "nome": "Coluna p/ Lavatório - Diva",
      "codigo": "311",
      "linhaExcel": 22,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-022",
      "nome": "Coluna p/ Lavatório Suspensa",
      "codigo": "312",
      "linhaExcel": 23,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-023",
      "nome": "Coluna p/ Tanque Onix",
      "codigo": "305",
      "linhaExcel": 24,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-024",
      "nome": "Caixa p/ Acoplar - DIVA",
      "codigo": "412",
      "linhaExcel": 25,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-025",
      "nome": "Caixa p/ Acoplar - IRIS",
      "codigo": 427,
      "linhaExcel": 26,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-026",
      "nome": "Mictorio Onix",
      "codigo": "601",
      "linhaExcel": 27,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-027",
      "nome": "Tanque Onix",
      "codigo": "505",
      "linhaExcel": 28,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-028",
      "nome": "Tampa p/ Caixa - Diva",
      "codigo": "512",
      "linhaExcel": 29,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-029",
      "nome": "Modelo Tampa p/ Caixa - Íris",
      "codigo": "517",
      "linhaExcel": 30,
      "origem": "PEÇAS"
    },
    {
      "id": "peca-030",
      "nome": "Tampa p/ Caixa - IRIS",
      "codigo": 517,
      "linhaExcel": 31,
      "origem": "PEÇAS"
    }
  ],
  "rawSheets": {
    "Busca rapida": {
      "nome": "Busca rapida",
      "linhas": 49,
      "colunas": 24,
      "linhasComDados": [
        {
          "linhaExcel": 2,
          "valores": [
            "Busca Por Nome:",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            "Busca Por Cod",
            null,
            null,
            null,
            null,
            null,
            null,
            "Busca Por Carimbo",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 6,
          "valores": [
            null,
            "Nome:",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            "Código:",
            null,
            null,
            null,
            null,
            null,
            null,
            "Carimbo:",
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 7,
          "valores": [
            null,
            "Setor:",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            "Setor:",
            null,
            null,
            null,
            null,
            null,
            null,
            "Setor:",
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 8,
          "valores": [
            null,
            "Carimbo:",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            "Nome:",
            null,
            null,
            null,
            null,
            null,
            null,
            "Nome:",
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 9,
          "valores": [
            null,
            "Código",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            "Carimbo:",
            null,
            null,
            null,
            null,
            null,
            null,
            "Código:",
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 14,
          "valores": [
            null,
            null,
            "Pesquisas de setores individuais.",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 23,
          "valores": [
            null,
            "Busca Por Nome Inspeção P.P. :",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            "Busca Por Nome Esmaltação:",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            "Busca Por Nome Fundção:",
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 27,
          "valores": [
            null,
            null,
            "Apelido:",
            "MARIA DE FATIMA",
            null,
            null,
            null,
            null,
            null,
            null,
            "Apelido:",
            "Weslei",
            null,
            null,
            null,
            null,
            null,
            null,
            "Apelido:",
            "Valdeir",
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 28,
          "valores": [
            null,
            null,
            "Carimbo:",
            88,
            null,
            null,
            null,
            null,
            null,
            null,
            "Carimbo:",
            4,
            null,
            null,
            null,
            null,
            null,
            null,
            "Carimbo:",
            1,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 29,
          "valores": [
            null,
            null,
            "Codigo de Cadastro:",
            712,
            null,
            null,
            null,
            null,
            null,
            null,
            "Codigo de Cadastro:",
            2353,
            null,
            null,
            null,
            null,
            null,
            null,
            "Codigo de Cadastro:",
            2148,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 30,
          "valores": [
            null,
            null,
            "Cod de funcionario:",
            11,
            null,
            null,
            null,
            null,
            null,
            null,
            "Cod de funcionario:",
            3,
            null,
            null,
            null,
            null,
            null,
            null,
            "Cod de funcionario:",
            3,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 31,
          "valores": [
            null,
            null,
            "Nome Completo:",
            "MARIA DE FATIMA GOMES DE SALES",
            null,
            null,
            null,
            null,
            null,
            null,
            "Nome Completo:",
            "WESLEI FRANCISCO DOS SANTOS",
            null,
            null,
            null,
            null,
            null,
            null,
            "Nome Completo:",
            "VALDEIR RODRIGUES DE MACEDO",
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 39,
          "valores": [
            null,
            "Busca Por Nome Classificação:",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 43,
          "valores": [
            null,
            null,
            "Apelido:",
            "Mariza",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 44,
          "valores": [
            null,
            null,
            "Carimbo:",
            1,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 45,
          "valores": [
            null,
            null,
            "Codigo de Cadastro:",
            1460,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 46,
          "valores": [
            null,
            null,
            "Cod de funcionario:",
            3,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 47,
          "valores": [
            null,
            null,
            "Nome Completo:",
            "MARIZA MARIA MARTINS DE ARAUJO",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        }
      ],
      "celulasMescladas": [
        "C14:S17",
        "R23:X25",
        "B23:H25",
        "B39:H41",
        "P2:U4",
        "I2:N4",
        "A2:G4",
        "J23:P25"
      ]
    },
    "PEÇAS": {
      "nome": "PEÇAS",
      "linhas": 34,
      "colunas": 11,
      "linhasComDados": [
        {
          "linhaExcel": 1,
          "valores": [
            "PEÇAS",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 2,
          "valores": [
            "Bacia Convencional - Diva",
            "111",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 3,
          "valores": [
            "Bacia P/ Acoplar - Diva",
            "112",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 4,
          "valores": [
            "Bacia Convencional - Íris",
            "116",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 5,
          "valores": [
            "Bacia P/ Acoplar - Íris",
            "117",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 6,
          "valores": [
            "Bacia P/ Acoplar Acessibilidade",
            "120",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 7,
          "valores": [
            "Bacia Convencional Acessibilidade",
            "121",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 8,
          "valores": [
            "Cuba Oval de embutir (505x385)",
            "210",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 9,
          "valores": [
            "Lavatório médio - Diva",
            "211",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 10,
          "valores": [
            "Cuba Oval de embutir (300x390)",
            "213",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 11,
          "valores": [
            "Modelo Cuba de Apoio Íris - Sem Mesa",
            "217",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 12,
          "valores": [
            "Cuba de Apoio Íris - Com Mesa",
            "227",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 13,
          "valores": [
            "Cuba de Apoio Athena - Sem Mesa (345)",
            "247",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 14,
          "valores": [
            "Cuba de Apoio Athena - Com Mesa (395)",
            "237",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 15,
          "valores": [
            "Cuba de Apoio Aurora (250)",
            "250",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 16,
          "valores": [
            "Cuba de Apoio Zaria",
            "270",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 17,
          "valores": [
            "Cuba de Apoio Dhara Oval",
            "260",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 18,
          "valores": [
            "Cuba Dhara Redonda - (350)",
            "230",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 19,
          "valores": [
            "Cuba Redonda de Embutir (300mm)",
            "214",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 20,
          "valores": [
            "Modelo Cuba de Cabelereiro com Friso",
            "222",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 21,
          "valores": [
            "Cuba Redonda de Embutir Fundida (370mm)",
            "212",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 22,
          "valores": [
            "Coluna p/ Lavatório - Diva",
            "311",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 23,
          "valores": [
            "Coluna p/ Lavatório Suspensa",
            "312",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 24,
          "valores": [
            "Coluna p/ Tanque Onix",
            "305",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 25,
          "valores": [
            "Caixa p/ Acoplar - DIVA",
            "412",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 26,
          "valores": [
            "Caixa p/ Acoplar - IRIS",
            427,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 27,
          "valores": [
            "Mictorio Onix",
            "601",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 28,
          "valores": [
            "Tanque Onix",
            "505",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 29,
          "valores": [
            "Tampa p/ Caixa - Diva",
            "512",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 30,
          "valores": [
            "Modelo Tampa p/ Caixa - Íris",
            "517",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 31,
          "valores": [
            "Tampa p/ Caixa - IRIS",
            517,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        }
      ],
      "celulasMescladas": [
        "A1:B1"
      ]
    },
    "COD": {
      "nome": "COD",
      "linhas": 66,
      "colunas": 18,
      "linhasComDados": [
        {
          "linhaExcel": 1,
          "valores": [
            "Nomes/Cod",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 2,
          "valores": [
            3,
            2148,
            1,
            "VALDEIR",
            "VALDEIR RODRIGUES DE MACEDO",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 3,
          "valores": [
            11,
            653,
            "101 (2)",
            "Pedro Henri (FUND) 2",
            "PEDRO HENRIQUE DA SILVA FLABILIO",
            null,
            null,
            null,
            null,
            "Nomes/cod",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 4,
          "valores": [
            3,
            1923,
            3,
            "ADILSON (FUNDIÇAO)",
            "ADILSON RAMOS",
            null,
            null,
            null,
            null,
            11,
            415,
            74,
            "LUCIANA (INSPETOR)",
            "LUCIANA INACIA DA SILVA",
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 5,
          "valores": [
            3,
            1150,
            4,
            "ADEMILSOM",
            "ADEMILSON ROSA DOS SANTOS",
            null,
            null,
            null,
            null,
            3,
            2209,
            53,
            "Adelia (INSPETOR)",
            "ADELIA APARECIDA GOMES PEREIRA",
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 6,
          "valores": [
            3,
            1000,
            5,
            "DURVAL",
            "DURVAL FERREIRA DE CARVALHO",
            null,
            null,
            null,
            null,
            0,
            1860,
            0,
            "Marilda Brito (INSPETOR)",
            "Marilda Brito",
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 7,
          "valores": [
            3,
            2094,
            7,
            "ANTONIA",
            "ANTONIA ERINALDA VIANA DE FRANCA",
            null,
            null,
            null,
            null,
            3,
            1821,
            57,
            "Ivana (INSPETOR)",
            "IVANA DIRLENE DA SILVA",
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 8,
          "valores": [
            3,
            2319,
            8,
            "MARCOS (FUNDIDOR)",
            "MARCOS JORGE DA SILVA",
            null,
            null,
            null,
            null,
            3,
            2489,
            49,
            "Maria R. (INSPETOR)",
            "MARIA RAIMUNDA GONCALVES DA SILVA",
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 9,
          "valores": [
            3,
            2240,
            10,
            "ANTONIO NASCIMENTO",
            "ANTONIO DO NASCIMENTO",
            null,
            null,
            null,
            null,
            3,
            1598,
            55,
            "Marilda (INSPETOR)",
            "MARILDA ANTONIA DOS REIS VALERIO",
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 10,
          "valores": [
            3,
            2415,
            11,
            "OTÁVIO",
            "OTAVIO MACHADO MANSO",
            null,
            null,
            null,
            null,
            11,
            712,
            88,
            "MARIA F (INSP) 88",
            "MARIA DE FATIMA GOMES DE SALES",
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 11,
          "valores": [
            3,
            2314,
            12,
            "CALEME (FUNDIDOR)",
            "CALEME OZALVO",
            null,
            null,
            null,
            null,
            3,
            1693,
            61,
            "Márcia (INSPETOR)",
            "MARCIA HELENA CANDIDO",
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 12,
          "valores": [
            3,
            2264,
            13,
            "JOSE SEVERINO",
            "JOSE SEVERINO DOS SANTOS",
            null,
            null,
            null,
            null,
            11,
            408,
            73,
            "ERIKA (INSPETOR)",
            "ERIKA LOPES DOS SANTOS",
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 13,
          "valores": [
            3,
            2267,
            14,
            "MILTON (FUND)",
            "MILTON AUGUSTO DA SILVA",
            null,
            null,
            null,
            null,
            11,
            542,
            78,
            "Camila (INSP78)",
            "CAMILA PEREIRA DE SOUSA",
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 14,
          "valores": [
            11,
            813,
            15,
            "RODRIGO (FUND 15)",
            "RODRIGO DE JESUS BRITO",
            null,
            null,
            null,
            null,
            3,
            2297,
            54,
            "Maria N.(INSPETOR)",
            "MARIA NILZA VIANA SANTOS",
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 15,
          "valores": [
            3,
            2381,
            16,
            "JACIRON",
            "JACIRON ALVES DOS SANTOS",
            null,
            null,
            null,
            null,
            11,
            603,
            85,
            "Maria Silva (INSP85)",
            "MARIA SILVA LIMA FERREIRA",
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 16,
          "valores": [
            11,
            778,
            "109 (17)",
            "WALTER S(FUND.17)",
            "WALTER SOARES DE SOUSA",
            null,
            null,
            null,
            null,
            11,
            859,
            90,
            "Valquiria (90)",
            "VALQUIRIA ROCHA BARBOSA DA CRUZ",
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 17,
          "valores": [
            3,
            2368,
            18,
            "MARCELO (FUND.)",
            "MARCELO DE OLIVEIRA DOS REIS",
            null,
            null,
            null,
            null,
            11,
            736,
            91,
            "Aprendiz 1 (INSP)91",
            "Aprendiz 1 (INSP)",
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 18,
          "valores": [
            11,
            804,
            "112 (20)",
            "Charles (FUND.20)",
            "CHARLES LIMA FERREIRA",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 19,
          "valores": [
            11,
            344,
            21,
            "Marcos (fundidoer)",
            "MARCO TULIO FIRMINO DA SILVA",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 20,
          "valores": [
            3,
            2444,
            22,
            "ANDRE SANTOS (FUND)",
            "ANDRE DOS SANTOS",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 21,
          "valores": [
            3,
            2439,
            23,
            "RICARDO (FUND)",
            "RICARDO GOMES DE SOUSA",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 22,
          "valores": [
            11,
            826,
            "113 (24)",
            "LUCAS L (FUND.24)",
            "LUCAS DE OLIVEIRA LIMA",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 23,
          "valores": [
            3,
            2485,
            26,
            "MACIEL",
            "MACIEL ROBERTO DOS SANTOS",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 24,
          "valores": [
            3,
            2483,
            27,
            "CARLOS (FUNDIDOR)",
            "CARLOS CORREIA DOS SANTOS",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 25,
          "valores": [
            11,
            345,
            28,
            "JOAO B (FUNDIDOR)",
            "JOAO BATISTA CONCEIÇÃO OLIVEIRA",
            null,
            null,
            "Cod. Líderes",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 26,
          "valores": [
            3,
            2285,
            30,
            "FABRICIO (FD)",
            "FABRICIO GALDEL SANTOS GOMES",
            null,
            null,
            "Inspeção Baci",
            "(2584) GUILHERME (INSPETOR)",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 27,
          "valores": [
            3,
            2513,
            31,
            "NYLTON (FUND)",
            "NYLTON CESAR BERNARDO DA SILVA",
            null,
            null,
            "Inspeção Peç. Peq.",
            "(54) ANTONIA ( INSP)",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 28,
          "valores": [
            3,
            1446,
            32,
            "TEREZA (FUNDIDOR)",
            "TEREZA CRISTINA FERNANDES",
            null,
            null,
            "Fundção",
            "(22) (2444) Andre Santos (FUND)",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 29,
          "valores": [
            3,
            1033,
            34,
            "NILTON (FUNDIDOR)",
            "NILTON CESAR ALVES BARBOSA",
            null,
            null,
            "Esmaltação",
            "(14) (156) Railson Jose (Esmalta)",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 30,
          "valores": [
            3,
            2111,
            36,
            "DALZIRIA (FUNDIDOR)",
            "DALZIRIA DA SILVA LIMA",
            null,
            null,
            "Expedição",
            "(10) (1342) Valdir Pedro (Expe)",
            null,
            null,
            "Nomes/Cod",
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 31,
          "valores": [
            3,
            2561,
            37,
            "RAFAEL (FUND.)",
            "RAFAEL CARVALHO DA SILVA SARAIVA",
            null,
            null,
            null,
            null,
            null,
            null,
            3,
            1992,
            2,
            "DORVACY (ESM)",
            "DORVACY FARIAS FERREIRA",
            null,
            null
          ]
        },
        {
          "linhaExcel": 32,
          "valores": [
            3,
            2503,
            38,
            "HUMBERTO FUND.",
            "HUMBERTO ALEXANDRE DOS SANTOS",
            null,
            null,
            null,
            null,
            null,
            null,
            11,
            239,
            11,
            "ALEXANDRE B(ESM)",
            "ALEXANDRE BAPTISTA ROCHA",
            null,
            null
          ]
        },
        {
          "linhaExcel": 33,
          "valores": [
            3,
            2566,
            40,
            "ALEXSANDRO (FUND)",
            "ALEXSANDRO SANTOS DO NASCIMENTO",
            null,
            null,
            null,
            null,
            null,
            null,
            11,
            400,
            21,
            "LEONADO B (FORNEIRO)",
            "LEONARDO BITENCOURT SOARES",
            null,
            null
          ]
        },
        {
          "linhaExcel": 34,
          "valores": [
            3,
            2573,
            41,
            "CORNELIO (FUNDIDOR)",
            "CORNELIO JOSE CARDOSO",
            null,
            null,
            null,
            null,
            null,
            null,
            3,
            1599,
            3,
            "PAULO (ESM)",
            "PAULO BRAGAS MACIEL",
            null,
            null
          ]
        },
        {
          "linhaExcel": 35,
          "valores": [
            3,
            2578,
            42,
            "WILLIAN (FUNDIDOR)",
            "WILLIAN ALVES CAMPOZANO",
            null,
            null,
            null,
            null,
            null,
            null,
            11,
            745,
            26,
            "ARTHUR (ESM.) 26",
            "ARTHUR BATISTA DOS SANTOS",
            null,
            null
          ]
        },
        {
          "linhaExcel": 36,
          "valores": [
            3,
            2580,
            43,
            "DEIVSON (FUNDIDOR)",
            "DEIVSON NASARENO SILVA",
            null,
            null,
            null,
            null,
            null,
            null,
            0,
            2421,
            2421,
            "IDGLAN (ESM.)",
            "IDGLAN",
            null,
            null
          ]
        },
        {
          "linhaExcel": 37,
          "valores": [
            3,
            2583,
            44,
            "MARIA (FUNDIDOR)",
            "MARIA DO SOCORRO CRISPIN BARRETO DA SILV",
            null,
            null,
            null,
            null,
            null,
            null,
            11,
            750,
            27,
            "ALEXSANDER (ESM.) 27",
            "ALEXSANDER CORREIA DA SILVA FERREIRA",
            null,
            null
          ]
        },
        {
          "linhaExcel": 38,
          "valores": [
            3,
            2585,
            45,
            "DIEGO (FUND.)",
            "DIEGO ALVES DE OLIVEIRA",
            null,
            null,
            null,
            null,
            null,
            null,
            3,
            2366,
            6,
            "RIVALDO (ESM)",
            "RIVALDO DO CARMO CAMPOS SILVA",
            null,
            null
          ]
        },
        {
          "linhaExcel": 39,
          "valores": [
            3,
            2590,
            48,
            "FABIANO (FUNDIDOR)",
            "FABIANO EUSTAQUIO DA LUZ",
            null,
            null,
            null,
            null,
            null,
            null,
            11,
            836,
            28,
            "VICTOR DO V.(ESM)28",
            "VICTOR DO VALLE DA CONCEIÇÃO",
            null,
            null
          ]
        },
        {
          "linhaExcel": 40,
          "valores": [
            11,
            46,
            54,
            "ADLET (FUND.)",
            "ADLET GUILLOME",
            null,
            null,
            null,
            null,
            null,
            null,
            11,
            690,
            25,
            "GUSTAVO (ESM) 25",
            "GUSTAVO VINICIUS DA SILVA SOUZA",
            null,
            null
          ]
        },
        {
          "linhaExcel": 41,
          "valores": [
            11,
            246,
            60,
            "Clebeson (FUNDIDOR)",
            "CLEBSON OLIVEIRA NASCIMENTO",
            null,
            null,
            null,
            null,
            null,
            null,
            "NOVATO",
            "NOVATO",
            "NOVATO",
            "LUIS GUSTAVO",
            "LUIS GUSTAVO",
            null,
            null
          ]
        },
        {
          "linhaExcel": 42,
          "valores": [
            11,
            272,
            79,
            "Paulo R.(FUND)79",
            "PAULO RICARDO PEREIRA DE SOUSA",
            null,
            "Nomes/cod",
            null,
            null,
            null,
            null,
            11,
            841,
            29,
            "BRENNO ASSIS(ESM)29",
            "BRENNO ASSIS BARBANTINI DA SILVA",
            null,
            null
          ]
        },
        {
          "linhaExcel": 43,
          "valores": [
            11,
            444,
            81,
            "DERICK (FUNDIDOR)81",
            "DERICK LOUGAN DE SOUSA SANTOS",
            null,
            3,
            1460,
            1,
            "MARIZA (CQ)",
            "MARIZA MARIA MARTINS DE ARAUJO",
            3,
            2353,
            4,
            "Weslei (ESM)",
            "WESLEI FRANCISCO DOS SANTOS",
            null,
            null
          ]
        },
        {
          "linhaExcel": 44,
          "valores": [
            11,
            459,
            83,
            "ADEILSON (FUND)83",
            "ADEILSON SOUSA",
            null,
            3,
            2327,
            6,
            "KATHREIN (CQ)",
            "KATHREIN MARTINS EVANGELISTA",
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 45,
          "valores": [
            11,
            451,
            84,
            "MARLON (FUNDIDOR)84",
            "MARLON GLEISON DA CONCEIÇÃO SILVA",
            null,
            3,
            1746,
            7,
            "CYNTHIA (CQ)",
            "CYNTHIA CRISTINA TOMAS MATIAS FERREIRA",
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 46,
          "valores": [
            11,
            337,
            85,
            "Gardone",
            "GARDONE CONCEIÇÃO DA SILVA",
            null,
            3,
            2344,
            7,
            "ELAINE CRISTINA",
            "ELAINE CRISTINA DE JESUS",
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 47,
          "valores": [
            11,
            522,
            87,
            "MISAEL (FUND.87)",
            "MISAEL FONTINELE DA SILVA SOUSA",
            null,
            3,
            1342,
            10,
            "VALDIR (CQ)",
            "VALDIR PEDRO DA SILVA",
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 48,
          "valores": [
            3,
            2522,
            90,
            "ALEXANDRE (FUND.90)",
            "ALEXANDRE HENRIQUE DOS SANTOS",
            null,
            3,
            2397,
            11,
            "Ana Cleia (CQ)",
            "ANA CLEA RODRIGUES DE SOUSA",
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 49,
          "valores": [
            11,
            552,
            91,
            "MARCIEL (FUND.91)",
            "MACIEL DOS SANTOS ARAUJO",
            null,
            3,
            2434,
            15,
            "ISAQUE (C.Q)",
            "IZAQUE SILVA DOS SANTOS",
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 50,
          "valores": [
            11,
            612,
            98,
            "MARCOS L (FUND.98)",
            "MARCOS JULIO LOPES",
            null,
            3,
            2526,
            17,
            "JORGE (C.Q)",
            "JORGE ANTONIO RODRIGUES JUNIOR",
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 51,
          "valores": [
            null,
            null,
            null,
            null,
            null,
            null,
            3,
            2532,
            18,
            "LUCAS (C.Q)",
            "LUCAS VIEIRA FELICIANO",
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 52,
          "valores": [
            null,
            null,
            null,
            null,
            null,
            null,
            3,
            2541,
            19,
            "MARCELO (CQ)",
            "MARCELO FRANCISCO LEAL",
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 53,
          "valores": [
            null,
            null,
            null,
            null,
            null,
            null,
            3,
            2547,
            20,
            "ALEXANDRO (CQ)",
            "ALEXANDRO MAIA",
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 54,
          "valores": [
            null,
            null,
            null,
            null,
            null,
            null,
            3,
            2557,
            21,
            "Alessandra (CQ)",
            "ALESSANDRA MARIA COSTA MULLER",
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 55,
          "valores": [
            null,
            null,
            null,
            null,
            null,
            null,
            3,
            2558,
            22,
            "Maria Luzia (CQ)",
            "MARIA LUZIA DA COSTA",
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 56,
          "valores": [
            null,
            null,
            null,
            null,
            null,
            null,
            3,
            2142,
            32,
            "VALDA (CQ)",
            "VALDA HELENA DA SILVA",
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 57,
          "valores": [
            null,
            null,
            null,
            null,
            null,
            null,
            3,
            2496,
            34,
            "MARIA ADRIANA (CQ)",
            "MARIA ADRIANA DE SOUSA SANTOS",
            null,
            null,
            "Nome/Cod",
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 58,
          "valores": [
            null,
            null,
            null,
            null,
            null,
            null,
            3,
            2560,
            35,
            "ALCEANE DA CONCEICAO",
            "ALCEANE DA CONCEICAO",
            null,
            null,
            3,
            1528,
            9,
            "Edjalma (FORNEIRO)",
            "EDJALMA RODRIGUES OLIVEIRA"
          ]
        },
        {
          "linhaExcel": 59,
          "valores": [
            null,
            null,
            null,
            null,
            null,
            null,
            3,
            2620,
            40,
            "MAGNO (CQ)",
            "MAGNO ROSENO DE MELO SILVA",
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 60,
          "valores": [
            null,
            null,
            null,
            null,
            null,
            null,
            11,
            243,
            46,
            "LINDOMAR (CLASS.)",
            "LINDOMAR PEREIRA DA SILVA",
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 61,
          "valores": [
            null,
            null,
            null,
            null,
            null,
            null,
            11,
            513,
            53,
            "KELLY (C.Q)",
            "KELLY FABIANA LUIS",
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 62,
          "valores": [
            null,
            null,
            null,
            null,
            null,
            null,
            11,
            619,
            62,
            "ALYNNI (C.Q) 62",
            "ALYNNI CRISTINA DE FREITAS LEMES",
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 63,
          "valores": [
            null,
            null,
            null,
            null,
            null,
            null,
            11,
            763,
            75,
            "MARCIA AUG (CQ) 75",
            "MARCIA AUGUSTA GONTIJO DA SILVA",
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 64,
          "valores": [
            null,
            null,
            null,
            null,
            null,
            null,
            11,
            764,
            76,
            "CARLOS H(C.Q)(76)",
            "CARLOS HENRIQUE SILVA PEREIRA",
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 65,
          "valores": [
            null,
            null,
            null,
            null,
            null,
            null,
            11,
            802,
            77,
            "Mikael - 802 (77)",
            "MIKAEL EVERSON SILVA DE OLIVEIRA",
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 66,
          "valores": [
            null,
            null,
            null,
            null,
            null,
            null,
            11,
            825,
            78,
            "Nilson(C.Q) 78",
            "NILSON OLIVEIRA NEVES",
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        }
      ],
      "celulasMescladas": [
        "H25:I25",
        "J3:N3",
        "N57:R57",
        "G42:K42",
        "A1:E1",
        "L30:P30"
      ]
    },
    "Geral Cod": {
      "nome": "Geral Cod",
      "linhas": 101,
      "colunas": 5,
      "linhasComDados": [
        {
          "linhaExcel": 1,
          "valores": [
            "Código",
            "Carimbo",
            "Nome",
            "Nome Completo",
            "Setor"
          ]
        },
        {
          "linhaExcel": 2,
          "valores": [
            2148,
            1,
            "VALDEIR",
            "VALDEIR RODRIGUES DE MACEDO",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 3,
          "valores": [
            653,
            "101 (2)",
            "Pedro Henri",
            "PEDRO HENRIQUE DA SILVA FLABILIO",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 4,
          "valores": [
            1923,
            3,
            "ADILSON",
            "ADILSON RAMOS",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 5,
          "valores": [
            1150,
            4,
            "ADEMILSOM",
            "ADEMILSON ROSA DOS SANTOS",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 6,
          "valores": [
            1000,
            5,
            "DURVAL",
            "DURVAL FERREIRA DE CARVALHO",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 7,
          "valores": [
            2094,
            7,
            "ANTONIA",
            "ANTONIA ERINALDA VIANA DE FRANCA",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 8,
          "valores": [
            2319,
            8,
            "MARCOS",
            "MARCOS JORGE DA SILVA",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 9,
          "valores": [
            2240,
            10,
            "ANTONIO NASCIMENTO",
            "ANTONIO DO NASCIMENTO",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 10,
          "valores": [
            2415,
            11,
            "OTAVIO",
            "OTAVIO MACHADO MANSO",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 11,
          "valores": [
            2314,
            12,
            "CALEME",
            "CALEME OZALVO",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 12,
          "valores": [
            2264,
            13,
            "JOSE SEVERINO",
            "JOSE SEVERINO DOS SANTOS",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 13,
          "valores": [
            2267,
            14,
            "MILTON",
            "MILTON AUGUSTO DA SILVA",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 14,
          "valores": [
            813,
            15,
            "RODRIGO",
            "RODRIGO DE JESUS BRITO",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 15,
          "valores": [
            2381,
            16,
            "JACIRON",
            "JACIRON ALVES DOS SANTOS",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 16,
          "valores": [
            778,
            "109 (17)",
            "WALTER S",
            "WALTER SOARES DE SOUSA",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 17,
          "valores": [
            2368,
            18,
            "MARCELO",
            "MARCELO DE OLIVEIRA DOS REIS",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 18,
          "valores": [
            804,
            "112 (20)",
            "Charles",
            "CHARLES LIMA FERREIRA",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 19,
          "valores": [
            344,
            21,
            "Marcos",
            "MARCO TULIO FIRMINO DA SILVA",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 20,
          "valores": [
            2444,
            22,
            "ANDRE SANTOS",
            "ANDRE DOS SANTOS",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 21,
          "valores": [
            2439,
            23,
            "RICARDO",
            "RICARDO GOMES DE SOUSA",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 22,
          "valores": [
            826,
            "113 (24)",
            "LUCAS L",
            "LUCAS DE OLIVEIRA LIMA",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 23,
          "valores": [
            2485,
            26,
            "MACIEL",
            "MACIEL ROBERTO DOS SANTOS",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 24,
          "valores": [
            2483,
            27,
            "CARLOS",
            "CARLOS CORREIA DOS SANTOS",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 25,
          "valores": [
            345,
            28,
            "JOAO B",
            "JOAO BATISTA CONCEIÇÃO OLIVEIRA",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 26,
          "valores": [
            2285,
            30,
            "FABRICIO",
            "FABRICIO GALDEL SANTOS GOMES",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 27,
          "valores": [
            2513,
            31,
            "NYLTON",
            "NYLTON CESAR BERNARDO DA SILVA",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 28,
          "valores": [
            1446,
            32,
            "TEREZA",
            "TEREZA CRISTINA FERNANDES",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 29,
          "valores": [
            1033,
            34,
            "NILTON",
            "NILTON CESAR ALVES BARBOSA",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 30,
          "valores": [
            2111,
            36,
            "DALZIRIA",
            "DALZIRIA DA SILVA LIMA",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 31,
          "valores": [
            2561,
            37,
            "RAFAEL",
            "RAFAEL CARVALHO DA SILVA SARAIVA",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 32,
          "valores": [
            2503,
            38,
            "HUMBERTO",
            "HUMBERTO ALEXANDRE DOS SANTOS",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 33,
          "valores": [
            2566,
            40,
            "ALEXSANDRO",
            "ALEXSANDRO SANTOS DO NASCIMENTO",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 34,
          "valores": [
            2573,
            41,
            "CORNELIO",
            "CORNELIO JOSE CARDOSO",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 35,
          "valores": [
            2578,
            42,
            "WILLIAN",
            "WILLIAN ALVES CAMPOZANO",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 36,
          "valores": [
            2580,
            43,
            "DEIVSON",
            "DEIVSON NASARENO SILVA",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 37,
          "valores": [
            2583,
            44,
            "MARIA",
            "MARIA DO SOCORRO CRISPIN BARRETO DA SILV",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 38,
          "valores": [
            2585,
            45,
            "DIEGO",
            "DIEGO ALVES DE OLIVEIRA",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 39,
          "valores": [
            2590,
            48,
            "FABIANO",
            "FABIANO EUSTAQUIO DA LUZ",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 40,
          "valores": [
            46,
            54,
            "ADLET",
            "ADLET GUILLOME",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 41,
          "valores": [
            246,
            60,
            "Clebeson",
            "CLEBSON OLIVEIRA NASCIMENTO",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 42,
          "valores": [
            272,
            79,
            "Paulo R",
            "PAULO RICARDO PEREIRA DE SOUSA",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 43,
          "valores": [
            444,
            81,
            "DERICK",
            "DERICK LOUGAN DE SOUSA SANTOS",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 44,
          "valores": [
            459,
            83,
            "ADEILSON",
            "ADEILSON SOUSA",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 45,
          "valores": [
            451,
            84,
            "MARLON",
            "MARLON GLEISON DA CONCEIÇÃO SILVA",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 46,
          "valores": [
            337,
            85,
            "Gardone",
            "GARDONE CONCEIÇÃO DA SILVA",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 47,
          "valores": [
            522,
            87,
            "MISAEL",
            "MISAEL FONTINELE DA SILVA SOUSA",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 48,
          "valores": [
            2522,
            90,
            "ALEXANDRE",
            "ALEXANDRE HENRIQUE DOS SANTOS",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 49,
          "valores": [
            552,
            91,
            "MARCIEL",
            "MACIEL DOS SANTOS ARAUJO",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 50,
          "valores": [
            612,
            98,
            "MARCOS L",
            "MARCOS JULIO LOPES",
            "Fundição"
          ]
        },
        {
          "linhaExcel": 51,
          "valores": [
            1992,
            2,
            "DORVACY",
            "DORVACY FARIAS FERREIRA",
            "Esmaltação"
          ]
        },
        {
          "linhaExcel": 52,
          "valores": [
            239,
            11,
            "ALEXANDRE B",
            "ALEXANDRE BAPTISTA ROCHA",
            "Esmaltação"
          ]
        },
        {
          "linhaExcel": 53,
          "valores": [
            400,
            21,
            "LEONADO B",
            "LEONARDO BITENCOURT SOARES",
            "Esmaltação"
          ]
        },
        {
          "linhaExcel": 54,
          "valores": [
            1599,
            3,
            "PAULO",
            "PAULO BRAGAS MACIEL",
            "Esmaltação"
          ]
        },
        {
          "linhaExcel": 55,
          "valores": [
            745,
            26,
            "ARTHUR",
            "ARTHUR BATISTA DOS SANTOS",
            "Esmaltação"
          ]
        },
        {
          "linhaExcel": 56,
          "valores": [
            2421,
            2421,
            "IDGLAN",
            "IDGLAN",
            "Esmaltação"
          ]
        },
        {
          "linhaExcel": 57,
          "valores": [
            750,
            27,
            "ALEXSANDER",
            "ALEXSANDER CORREIA DA SILVA FERREIRA",
            "Esmaltação"
          ]
        },
        {
          "linhaExcel": 58,
          "valores": [
            2366,
            6,
            "RIVALDO",
            "RIVALDO DO CARMO CAMPOS SILVA",
            "Esmaltação"
          ]
        },
        {
          "linhaExcel": 59,
          "valores": [
            836,
            28,
            "VICTOR DO V",
            "VICTOR DO VALLE DA CONCEIÇÃO",
            "Esmaltação"
          ]
        },
        {
          "linhaExcel": 60,
          "valores": [
            690,
            25,
            "GUSTAVO",
            "GUSTAVO VINICIUS DA SILVA SOUZA",
            "Esmaltação"
          ]
        },
        {
          "linhaExcel": 61,
          "valores": [
            "NOVATO",
            "NOVATO",
            "LUIS GUSTAVO",
            "LUIS GUSTAVO",
            "Esmaltação"
          ]
        },
        {
          "linhaExcel": 62,
          "valores": [
            841,
            29,
            "BRENNO ASSIS",
            "BRENNO ASSIS BARBANTINI DA SILVA",
            "Esmaltação"
          ]
        },
        {
          "linhaExcel": 63,
          "valores": [
            2353,
            4,
            "Weslei",
            "WESLEI FRANCISCO DOS SANTOS",
            "Esmaltação"
          ]
        },
        {
          "linhaExcel": 64,
          "valores": [
            1460,
            1,
            "MARIZA",
            "MARIZA MARIA MARTINS DE ARAUJO",
            "Classificação"
          ]
        },
        {
          "linhaExcel": 65,
          "valores": [
            2327,
            6,
            "KATHREIN",
            "KATHREIN MARTINS EVANGELISTA",
            "Classificação"
          ]
        },
        {
          "linhaExcel": 66,
          "valores": [
            1746,
            7,
            "CYNTHIA",
            "CYNTHIA CRISTINA TOMAS MATIAS FERREIRA",
            "Classificação"
          ]
        },
        {
          "linhaExcel": 67,
          "valores": [
            2344,
            7,
            "ELAINE CRISTINA",
            "ELAINE CRISTINA DE JESUS",
            "Classificação"
          ]
        },
        {
          "linhaExcel": 68,
          "valores": [
            1342,
            10,
            "VALDIR",
            "VALDIR PEDRO DA SILVA",
            "Classificação"
          ]
        },
        {
          "linhaExcel": 69,
          "valores": [
            2397,
            11,
            "Ana Cleia",
            "ANA CLEA RODRIGUES DE SOUSA",
            "Classificação"
          ]
        },
        {
          "linhaExcel": 70,
          "valores": [
            2434,
            15,
            "ISAQUE",
            "IZAQUE SILVA DOS SANTOS",
            "Classificação"
          ]
        },
        {
          "linhaExcel": 71,
          "valores": [
            2526,
            17,
            "JORGE",
            "JORGE ANTONIO RODRIGUES JUNIOR",
            "Classificação"
          ]
        },
        {
          "linhaExcel": 72,
          "valores": [
            2532,
            18,
            "LUCAS",
            "LUCAS VIEIRA FELICIANO",
            "Classificação"
          ]
        },
        {
          "linhaExcel": 73,
          "valores": [
            2541,
            19,
            "MARCELO",
            "MARCELO FRANCISCO LEAL",
            "Classificação"
          ]
        },
        {
          "linhaExcel": 74,
          "valores": [
            2547,
            20,
            "ALEXANDRO",
            "ALEXANDRO MAIA",
            "Classificação"
          ]
        },
        {
          "linhaExcel": 75,
          "valores": [
            2557,
            21,
            "Alessandra",
            "ALESSANDRA MARIA COSTA MULLER",
            "Classificação"
          ]
        },
        {
          "linhaExcel": 76,
          "valores": [
            2558,
            22,
            "Maria Luzia",
            "MARIA LUZIA DA COSTA",
            "Classificação"
          ]
        },
        {
          "linhaExcel": 77,
          "valores": [
            2142,
            32,
            "VALDA",
            "VALDA HELENA DA SILVA",
            "Classificação"
          ]
        },
        {
          "linhaExcel": 78,
          "valores": [
            2496,
            34,
            "MARIA ADRIANA",
            "MARIA ADRIANA DE SOUSA SANTOS",
            "Classificação"
          ]
        },
        {
          "linhaExcel": 79,
          "valores": [
            2560,
            35,
            "ALCEANE DA CONCEICAO",
            "ALCEANE DA CONCEICAO",
            "Classificação"
          ]
        },
        {
          "linhaExcel": 80,
          "valores": [
            2620,
            40,
            "MAGNO",
            "MAGNO ROSENO DE MELO SILVA",
            "Classificação"
          ]
        },
        {
          "linhaExcel": 81,
          "valores": [
            243,
            46,
            "LINDOMAR",
            "LINDOMAR PEREIRA DA SILVA",
            "Classificação"
          ]
        },
        {
          "linhaExcel": 82,
          "valores": [
            513,
            53,
            "KELLY",
            "KELLY FABIANA LUIS",
            "Classificação"
          ]
        },
        {
          "linhaExcel": 83,
          "valores": [
            619,
            62,
            "ALYNNI",
            "ALYNNI CRISTINA DE FREITAS LEMES",
            "Classificação"
          ]
        },
        {
          "linhaExcel": 84,
          "valores": [
            763,
            75,
            "MARCIA AUG",
            "MARCIA AUGUSTA GONTIJO DA SILVA",
            "Classificação"
          ]
        },
        {
          "linhaExcel": 85,
          "valores": [
            764,
            76,
            "CARLOS H",
            "CARLOS HENRIQUE SILVA PEREIRA",
            "Classificação"
          ]
        },
        {
          "linhaExcel": 86,
          "valores": [
            802,
            77,
            "Mikael",
            "MIKAEL EVERSON SILVA DE OLIVEIRA",
            "Classificação"
          ]
        },
        {
          "linhaExcel": 87,
          "valores": [
            825,
            78,
            "Nilson",
            "NILSON OLIVEIRA NEVES",
            "Classificação"
          ]
        },
        {
          "linhaExcel": 88,
          "valores": [
            415,
            74,
            "LUCIANA",
            "LUCIANA INACIA DA SILVA",
            "Inspeção Peças Pequenas"
          ]
        },
        {
          "linhaExcel": 89,
          "valores": [
            2209,
            53,
            "Adelia",
            "ADELIA APARECIDA GOMES PEREIRA",
            "Inspeção Peças Pequenas"
          ]
        },
        {
          "linhaExcel": 90,
          "valores": [
            1860,
            0,
            "Marilda Brito",
            "Marilda Brito",
            "Inspeção Peças Pequenas"
          ]
        },
        {
          "linhaExcel": 91,
          "valores": [
            1821,
            57,
            "Ivana",
            "IVANA DIRLENE DA SILVA",
            "Inspeção Peças Pequenas"
          ]
        },
        {
          "linhaExcel": 92,
          "valores": [
            2489,
            49,
            "Maria R",
            "MARIA RAIMUNDA GONCALVES DA SILVA",
            "Inspeção Peças Pequenas"
          ]
        },
        {
          "linhaExcel": 93,
          "valores": [
            1598,
            55,
            "Marilda",
            "MARILDA ANTONIA DOS REIS VALERIO",
            "Inspeção Peças Pequenas"
          ]
        },
        {
          "linhaExcel": 94,
          "valores": [
            712,
            88,
            "MARIA F",
            "MARIA DE FATIMA GOMES DE SALES",
            "Inspeção Peças Pequenas"
          ]
        },
        {
          "linhaExcel": 95,
          "valores": [
            1693,
            61,
            "Marcia",
            "MARCIA HELENA CANDIDO",
            "Inspeção Peças Pequenas"
          ]
        },
        {
          "linhaExcel": 96,
          "valores": [
            408,
            73,
            "ERIKA",
            "ERIKA LOPES DOS SANTOS",
            "Inspeção Peças Pequenas"
          ]
        },
        {
          "linhaExcel": 97,
          "valores": [
            542,
            78,
            "Camila",
            "CAMILA PEREIRA DE SOUSA",
            "Inspeção Peças Pequenas"
          ]
        },
        {
          "linhaExcel": 98,
          "valores": [
            2297,
            54,
            "Maria N",
            "MARIA NILZA VIANA SANTOS",
            "Inspeção Peças Pequenas"
          ]
        },
        {
          "linhaExcel": 99,
          "valores": [
            603,
            85,
            "Maria Silva",
            "MARIA SILVA LIMA FERREIRA",
            "Inspeção Peças Pequenas"
          ]
        },
        {
          "linhaExcel": 100,
          "valores": [
            859,
            90,
            "Valquiria",
            "VALQUIRIA ROCHA BARBOSA DA CRUZ",
            "Inspeção Peças Pequenas"
          ]
        },
        {
          "linhaExcel": 101,
          "valores": [
            736,
            91,
            "Aprendiz 1",
            "Aprendiz 1 (INSP)",
            "Inspeção Peças Pequenas"
          ]
        }
      ],
      "celulasMescladas": []
    },
    "Esmaltação": {
      "nome": "Esmaltação",
      "linhas": 15,
      "colunas": 5,
      "linhasComDados": [
        {
          "linhaExcel": 2,
          "valores": [
            "Nomes/Cod",
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 3,
          "valores": [
            3,
            1992,
            2,
            "Dorvacy",
            "DORVACY FARIAS FERREIRA"
          ]
        },
        {
          "linhaExcel": 4,
          "valores": [
            11,
            239,
            11,
            "Alexandre",
            "ALEXANDRE BAPTISTA ROCHA"
          ]
        },
        {
          "linhaExcel": 5,
          "valores": [
            11,
            400,
            21,
            "Leonado",
            "LEONARDO BITENCOURT SOARES"
          ]
        },
        {
          "linhaExcel": 6,
          "valores": [
            3,
            1599,
            3,
            "Paulo",
            "PAULO BRAGAS MACIEL"
          ]
        },
        {
          "linhaExcel": 7,
          "valores": [
            11,
            745,
            26,
            "Arthur",
            "ARTHUR BATISTA DOS SANTOS"
          ]
        },
        {
          "linhaExcel": 8,
          "valores": [
            0,
            2421,
            2421,
            "Idglan",
            "IDGLAN"
          ]
        },
        {
          "linhaExcel": 9,
          "valores": [
            11,
            750,
            27,
            "Alexsander",
            "ALEXSANDER CORREIA DA SILVA FERREIRA"
          ]
        },
        {
          "linhaExcel": 10,
          "valores": [
            3,
            2366,
            6,
            "Rivaldo",
            "RIVALDO DO CARMO CAMPOS SILVA"
          ]
        },
        {
          "linhaExcel": 11,
          "valores": [
            11,
            836,
            28,
            "Victor",
            "VICTOR DO VALLE DA CONCEIÇÃO"
          ]
        },
        {
          "linhaExcel": 12,
          "valores": [
            11,
            690,
            25,
            "Gustavo",
            "GUSTAVO VINICIUS DA SILVA SOUZA"
          ]
        },
        {
          "linhaExcel": 13,
          "valores": [
            "NOVATO",
            "NOVATO",
            "NOVATO",
            "Luis Gustavo",
            "LUIS GUSTAVO"
          ]
        },
        {
          "linhaExcel": 14,
          "valores": [
            11,
            841,
            29,
            "Brenno",
            "BRENNO ASSIS BARBANTINI DA SILVA"
          ]
        },
        {
          "linhaExcel": 15,
          "valores": [
            3,
            2353,
            4,
            "Weslei",
            "WESLEI FRANCISCO DOS SANTOS"
          ]
        }
      ],
      "celulasMescladas": [
        "A2:E2"
      ]
    },
    "Inspção P. Pequenas": {
      "nome": "Inspção P. Pequenas",
      "linhas": 16,
      "colunas": 5,
      "linhasComDados": [
        {
          "linhaExcel": 2,
          "valores": [
            "Nomes/cod",
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 3,
          "valores": [
            11,
            415,
            74,
            "LUCIANA",
            "LUCIANA INACIA DA SILVA"
          ]
        },
        {
          "linhaExcel": 4,
          "valores": [
            3,
            2209,
            53,
            "Adelia",
            "ADELIA APARECIDA GOMES PEREIRA"
          ]
        },
        {
          "linhaExcel": 5,
          "valores": [
            0,
            1860,
            0,
            "Marilda Brito",
            "Marilda Brito"
          ]
        },
        {
          "linhaExcel": 6,
          "valores": [
            3,
            1821,
            57,
            "Ivana",
            "IVANA DIRLENE DA SILVA"
          ]
        },
        {
          "linhaExcel": 7,
          "valores": [
            3,
            2489,
            49,
            "Maria Raimunda",
            "MARIA RAIMUNDA GONCALVES DA SILVA"
          ]
        },
        {
          "linhaExcel": 8,
          "valores": [
            3,
            1598,
            55,
            "Marilda Brito",
            "MARILDA ANTONIA DOS REIS VALERIO"
          ]
        },
        {
          "linhaExcel": 9,
          "valores": [
            11,
            712,
            88,
            "MARIA DE FATIMA",
            "MARIA DE FATIMA GOMES DE SALES"
          ]
        },
        {
          "linhaExcel": 10,
          "valores": [
            3,
            1693,
            61,
            "Márcia",
            "MARCIA HELENA CANDIDO"
          ]
        },
        {
          "linhaExcel": 11,
          "valores": [
            11,
            408,
            73,
            "ERIKA",
            "ERIKA LOPES DOS SANTOS"
          ]
        },
        {
          "linhaExcel": 12,
          "valores": [
            11,
            542,
            78,
            "Camila",
            "CAMILA PEREIRA DE SOUSA"
          ]
        },
        {
          "linhaExcel": 13,
          "valores": [
            3,
            2297,
            54,
            "Maria N",
            "MARIA NILZA VIANA SANTOS"
          ]
        },
        {
          "linhaExcel": 14,
          "valores": [
            11,
            603,
            85,
            "Maria Silva",
            "MARIA SILVA LIMA FERREIRA"
          ]
        },
        {
          "linhaExcel": 15,
          "valores": [
            11,
            859,
            90,
            "Valquiria",
            "VALQUIRIA ROCHA BARBOSA DA CRUZ"
          ]
        },
        {
          "linhaExcel": 16,
          "valores": [
            11,
            736,
            91,
            "Aprendiz 1",
            "Aprendiz 1 (INSP)"
          ]
        }
      ],
      "celulasMescladas": [
        "A2:E2"
      ]
    },
    "Fundição": {
      "nome": "Fundição",
      "linhas": 51,
      "colunas": 5,
      "linhasComDados": [
        {
          "linhaExcel": 2,
          "valores": [
            "Nomes/Cod",
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 3,
          "valores": [
            3,
            2148,
            1,
            "Valdeir",
            "VALDEIR RODRIGUES DE MACEDO"
          ]
        },
        {
          "linhaExcel": 4,
          "valores": [
            11,
            653,
            "101 (2)",
            "Pedro Henri",
            "PEDRO HENRIQUE DA SILVA FLABILIO"
          ]
        },
        {
          "linhaExcel": 5,
          "valores": [
            3,
            1923,
            3,
            "Adilson",
            "ADILSON RAMOS"
          ]
        },
        {
          "linhaExcel": 6,
          "valores": [
            3,
            1150,
            4,
            "Ademilsom",
            "ADEMILSON ROSA DOS SANTOS"
          ]
        },
        {
          "linhaExcel": 7,
          "valores": [
            3,
            1000,
            5,
            "Durval",
            "DURVAL FERREIRA DE CARVALHO"
          ]
        },
        {
          "linhaExcel": 8,
          "valores": [
            3,
            2094,
            7,
            "Antonia",
            "ANTONIA ERINALDA VIANA DE FRANCA"
          ]
        },
        {
          "linhaExcel": 9,
          "valores": [
            3,
            2319,
            8,
            "Marcos",
            "MARCOS JORGE DA SILVA"
          ]
        },
        {
          "linhaExcel": 10,
          "valores": [
            3,
            2240,
            10,
            "Antonio Nascimento",
            "ANTONIO DO NASCIMENTO"
          ]
        },
        {
          "linhaExcel": 11,
          "valores": [
            3,
            2415,
            11,
            "Otávio",
            "OTAVIO MACHADO MANSO"
          ]
        },
        {
          "linhaExcel": 12,
          "valores": [
            3,
            2314,
            12,
            "Caleme",
            "CALEME OZALVO"
          ]
        },
        {
          "linhaExcel": 13,
          "valores": [
            3,
            2264,
            13,
            "Jose Severino",
            "JOSE SEVERINO DOS SANTOS"
          ]
        },
        {
          "linhaExcel": 14,
          "valores": [
            3,
            2267,
            14,
            "Milton",
            "MILTON AUGUSTO DA SILVA"
          ]
        },
        {
          "linhaExcel": 15,
          "valores": [
            11,
            813,
            15,
            "Rodrigo",
            "RODRIGO DE JESUS BRITO"
          ]
        },
        {
          "linhaExcel": 16,
          "valores": [
            3,
            2381,
            16,
            "Jaciron",
            "JACIRON ALVES DOS SANTOS"
          ]
        },
        {
          "linhaExcel": 17,
          "valores": [
            11,
            778,
            "109 (17)",
            "Walter",
            "WALTER SOARES DE SOUSA"
          ]
        },
        {
          "linhaExcel": 18,
          "valores": [
            3,
            2368,
            18,
            "Marcelo",
            "MARCELO DE OLIVEIRA DOS REIS"
          ]
        },
        {
          "linhaExcel": 19,
          "valores": [
            11,
            804,
            "112 (20)",
            "Charles",
            "CHARLES LIMA FERREIRA"
          ]
        },
        {
          "linhaExcel": 20,
          "valores": [
            11,
            344,
            21,
            "Marcos",
            "MARCO TULIO FIRMINO DA SILVA"
          ]
        },
        {
          "linhaExcel": 21,
          "valores": [
            3,
            2444,
            22,
            "Andre Santos",
            "ANDRE DOS SANTOS"
          ]
        },
        {
          "linhaExcel": 22,
          "valores": [
            3,
            2439,
            23,
            "Ricardo",
            "RICARDO GOMES DE SOUSA"
          ]
        },
        {
          "linhaExcel": 23,
          "valores": [
            11,
            826,
            "113 (24)",
            "Lucas",
            "LUCAS DE OLIVEIRA LIMA"
          ]
        },
        {
          "linhaExcel": 24,
          "valores": [
            3,
            2485,
            26,
            "Maciel",
            "MACIEL ROBERTO DOS SANTOS"
          ]
        },
        {
          "linhaExcel": 25,
          "valores": [
            3,
            2483,
            27,
            "Carlos",
            "CARLOS CORREIA DOS SANTOS"
          ]
        },
        {
          "linhaExcel": 26,
          "valores": [
            11,
            345,
            28,
            "Joao B",
            "JOAO BATISTA CONCEIÇÃO OLIVEIRA"
          ]
        },
        {
          "linhaExcel": 27,
          "valores": [
            3,
            2285,
            30,
            "Fabricio",
            "FABRICIO GALDEL SANTOS GOMES"
          ]
        },
        {
          "linhaExcel": 28,
          "valores": [
            3,
            2513,
            31,
            "Nylton",
            "NYLTON CESAR BERNARDO DA SILVA"
          ]
        },
        {
          "linhaExcel": 29,
          "valores": [
            3,
            1446,
            32,
            "Tereza",
            "TEREZA CRISTINA FERNANDES"
          ]
        },
        {
          "linhaExcel": 30,
          "valores": [
            3,
            1033,
            34,
            "Nilton",
            "NILTON CESAR ALVES BARBOSA"
          ]
        },
        {
          "linhaExcel": 31,
          "valores": [
            3,
            2111,
            36,
            "Dalziria",
            "DALZIRIA DA SILVA LIMA"
          ]
        },
        {
          "linhaExcel": 32,
          "valores": [
            3,
            2561,
            37,
            "Rafael",
            "RAFAEL CARVALHO DA SILVA SARAIVA"
          ]
        },
        {
          "linhaExcel": 33,
          "valores": [
            3,
            2503,
            38,
            "Humberto",
            "HUMBERTO ALEXANDRE DOS SANTOS"
          ]
        },
        {
          "linhaExcel": 34,
          "valores": [
            3,
            2566,
            40,
            "Alexsandro",
            "ALEXSANDRO SANTOS DO NASCIMENTO"
          ]
        },
        {
          "linhaExcel": 35,
          "valores": [
            3,
            2573,
            41,
            "Cornelio",
            "CORNELIO JOSE CARDOSO"
          ]
        },
        {
          "linhaExcel": 36,
          "valores": [
            3,
            2578,
            42,
            "Willian",
            "WILLIAN ALVES CAMPOZANO"
          ]
        },
        {
          "linhaExcel": 37,
          "valores": [
            3,
            2580,
            43,
            "Deivson",
            "DEIVSON NASARENO SILVA"
          ]
        },
        {
          "linhaExcel": 38,
          "valores": [
            3,
            2583,
            44,
            "Maria",
            "MARIA DO SOCORRO CRISPIN BARRETO DA SILV"
          ]
        },
        {
          "linhaExcel": 39,
          "valores": [
            3,
            2585,
            45,
            "Diego",
            "DIEGO ALVES DE OLIVEIRA"
          ]
        },
        {
          "linhaExcel": 40,
          "valores": [
            3,
            2590,
            48,
            "Fabiano",
            "FABIANO EUSTAQUIO DA LUZ"
          ]
        },
        {
          "linhaExcel": 41,
          "valores": [
            11,
            46,
            54,
            "Adlet",
            "ADLET GUILLOME"
          ]
        },
        {
          "linhaExcel": 42,
          "valores": [
            11,
            246,
            60,
            "Clebeson",
            "CLEBSON OLIVEIRA NASCIMENTO"
          ]
        },
        {
          "linhaExcel": 43,
          "valores": [
            11,
            272,
            79,
            "Paulo",
            "PAULO RICARDO PEREIRA DE SOUSA"
          ]
        },
        {
          "linhaExcel": 44,
          "valores": [
            11,
            444,
            81,
            "Derick",
            "DERICK LOUGAN DE SOUSA SANTOS"
          ]
        },
        {
          "linhaExcel": 45,
          "valores": [
            11,
            459,
            83,
            "Adeilson",
            "ADEILSON SOUSA"
          ]
        },
        {
          "linhaExcel": 46,
          "valores": [
            11,
            451,
            84,
            "Marlon",
            "MARLON GLEISON DA CONCEIÇÃO SILVA"
          ]
        },
        {
          "linhaExcel": 47,
          "valores": [
            11,
            337,
            85,
            "Gardone",
            "GARDONE CONCEIÇÃO DA SILVA"
          ]
        },
        {
          "linhaExcel": 48,
          "valores": [
            11,
            522,
            87,
            "Misael",
            "MISAEL FONTINELE DA SILVA SOUSA"
          ]
        },
        {
          "linhaExcel": 49,
          "valores": [
            3,
            2522,
            90,
            "Alexandre",
            "ALEXANDRE HENRIQUE DOS SANTOS"
          ]
        },
        {
          "linhaExcel": 50,
          "valores": [
            11,
            552,
            91,
            "Marciel",
            "MACIEL DOS SANTOS ARAUJO"
          ]
        },
        {
          "linhaExcel": 51,
          "valores": [
            11,
            612,
            98,
            "Marcos",
            "MARCOS JULIO LOPES"
          ]
        }
      ],
      "celulasMescladas": [
        "A2:E2"
      ]
    },
    "Classificação": {
      "nome": "Classificação",
      "linhas": 26,
      "colunas": 5,
      "linhasComDados": [
        {
          "linhaExcel": 2,
          "valores": [
            "Nomes/cod",
            null,
            null,
            null,
            null
          ]
        },
        {
          "linhaExcel": 3,
          "valores": [
            3,
            1460,
            1,
            "Mariza",
            "MARIZA MARIA MARTINS DE ARAUJO"
          ]
        },
        {
          "linhaExcel": 4,
          "valores": [
            3,
            2327,
            6,
            "Kathrein",
            "KATHREIN MARTINS EVANGELISTA"
          ]
        },
        {
          "linhaExcel": 5,
          "valores": [
            3,
            1746,
            7,
            "Cynthia",
            "CYNTHIA CRISTINA TOMAS MATIAS FERREIRA"
          ]
        },
        {
          "linhaExcel": 6,
          "valores": [
            3,
            2344,
            7,
            "Elaine Cristina",
            "ELAINE CRISTINA DE JESUS"
          ]
        },
        {
          "linhaExcel": 7,
          "valores": [
            3,
            1342,
            10,
            "Valdir",
            "VALDIR PEDRO DA SILVA"
          ]
        },
        {
          "linhaExcel": 8,
          "valores": [
            3,
            2397,
            11,
            "Ana Cleia",
            "ANA CLEA RODRIGUES DE SOUSA"
          ]
        },
        {
          "linhaExcel": 9,
          "valores": [
            3,
            2434,
            15,
            "Isaque",
            "IZAQUE SILVA DOS SANTOS"
          ]
        },
        {
          "linhaExcel": 10,
          "valores": [
            3,
            2526,
            17,
            "Jorge",
            "JORGE ANTONIO RODRIGUES JUNIOR"
          ]
        },
        {
          "linhaExcel": 11,
          "valores": [
            3,
            2532,
            18,
            "Lucas",
            "LUCAS VIEIRA FELICIANO"
          ]
        },
        {
          "linhaExcel": 12,
          "valores": [
            3,
            2541,
            19,
            "Marcelo",
            "MARCELO FRANCISCO LEAL"
          ]
        },
        {
          "linhaExcel": 13,
          "valores": [
            3,
            2547,
            20,
            "Alexandro",
            "ALEXANDRO MAIA"
          ]
        },
        {
          "linhaExcel": 14,
          "valores": [
            3,
            2557,
            21,
            "Alessandra",
            "ALESSANDRA MARIA COSTA MULLER"
          ]
        },
        {
          "linhaExcel": 15,
          "valores": [
            3,
            2558,
            22,
            "Maria Luzia",
            "MARIA LUZIA DA COSTA"
          ]
        },
        {
          "linhaExcel": 16,
          "valores": [
            3,
            2142,
            32,
            "Valda",
            "VALDA HELENA DA SILVA"
          ]
        },
        {
          "linhaExcel": 17,
          "valores": [
            3,
            2496,
            34,
            "Maria Adriana",
            "MARIA ADRIANA DE SOUSA SANTOS"
          ]
        },
        {
          "linhaExcel": 18,
          "valores": [
            3,
            2560,
            35,
            "Alceane da Conceicao",
            "ALCEANE DA CONCEICAO"
          ]
        },
        {
          "linhaExcel": 19,
          "valores": [
            3,
            2620,
            40,
            "Magno",
            "MAGNO ROSENO DE MELO SILVA"
          ]
        },
        {
          "linhaExcel": 20,
          "valores": [
            11,
            243,
            46,
            "Lindomar",
            "LINDOMAR PEREIRA DA SILVA"
          ]
        },
        {
          "linhaExcel": 21,
          "valores": [
            11,
            513,
            53,
            "Kelly",
            "KELLY FABIANA LUIS"
          ]
        },
        {
          "linhaExcel": 22,
          "valores": [
            11,
            619,
            62,
            "Alynni",
            "ALYNNI CRISTINA DE FREITAS LEMES"
          ]
        },
        {
          "linhaExcel": 23,
          "valores": [
            11,
            763,
            75,
            "Marcia Aug",
            "MARCIA AUGUSTA GONTIJO DA SILVA"
          ]
        },
        {
          "linhaExcel": 24,
          "valores": [
            11,
            764,
            76,
            "Carlos H",
            "CARLOS HENRIQUE SILVA PEREIRA"
          ]
        },
        {
          "linhaExcel": 25,
          "valores": [
            11,
            802,
            77,
            "Mikael",
            "MIKAEL EVERSON SILVA DE OLIVEIRA"
          ]
        },
        {
          "linhaExcel": 26,
          "valores": [
            11,
            825,
            78,
            "Nilson",
            "NILSON OLIVEIRA NEVES"
          ]
        }
      ],
      "celulasMescladas": [
        "A2:E2"
      ]
    }
  }
} as const;

export const colaboradores = infogeralData.colaboradores as readonly Colaborador[];
export const pecas = infogeralData.pecas as readonly Peca[];
export const detalhesPorSetor = infogeralData.detalhesPorSetor;
export const rawSheets = infogeralData.rawSheets;
export const metadata = infogeralData.metadata;
