export const templateConstraintStub = {
	description:
		'Show genes expressed in a set of tissues/stages according to the modENCODE RNA_seq data.  The expression scores are binned into the expression levels as follows: No/Extremely low expression: 0-0; Very low expression: 1-3; Low expression: 4-10; Moderate expression: 11-25; Moderately high expression: 26-50; High expression: 51-100; Very high expression: 101-1000; Extremely high expression: >1000;',
	tags: ['im:aspect:Expression', 'im:public'],
	where: [
		{
			path: 'Gene.rnaSeqResults.stage',
			op: 'ONE OF',
			code: 'A',
			editable: true,
			switchable: false,
			switched: 'LOCKED',
			values: [
				'A MateF 1d head',
				'A MateF 20d head',
				'A MateF 4d head',
				'A MateM 1d head',
				'A MateM 20d head',
				'A MateM 4d acc gland',
				'A MateM 4d head',
				'A MateM 4d testis',
				'A VirF 1d head',
				'A VirF 20d head',
				'A VirF 4d head',
				'CNS ML-DmBG1-c1',
				'CNS ML-DmBG2-c2',
				'L3 CNS',
				'L3 Wand carcass',
				'L3 Wand dig sys',
				'L3 Wand fat',
				'L3 Wand imag disc',
				'L3 Wand saliv',
			],
		},
		{
			path: 'Gene.rnaSeqResults.expressionLevel',
			op: 'ONE OF',
			code: 'B',
			editable: true,
			switchable: false,
			switched: 'LOCKED',
			values: [
				'Extremely high expression',
				'High expression',
				'High level expression',
				'Moderately high expression',
				'Very high expression',
			],
		},
	],
	name: 'modENCODE_RNA_seq_Tissues',
	rank: '1',
	title: 'RNA_seq --> Genes expressed in a set of tissues',
	from: 'Gene',
	comment: '',
	sortOrder: [
		{
			path: 'Gene.symbol',
			direction: 'ASC',
		},
	],
	constraintLogic: 'A and B',
	select: [
		'Gene.symbol',
		'Gene.rnaSeqResults.stage',
		'Gene.rnaSeqResults.expressionLevel',
		'Gene.rnaSeqResults.expressionScore',
	],
	model: {
		name: 'genomic',
	},
}
