import pandas as pd


df = pd.read_csv('DHS_DOHHvsTar4_EC/enrichment.KEGG.tsv', sep='\t')
df1 = pd.read_csv('DHS_DOHHvsTar4_EC/enrichment.RCTM.tsv', sep='\t')
df2 = pd.read_csv('DHS_DOHHvsTar4_EC/enrichment.WikiPathways.tsv', sep='\t')

df3 = pd.read_csv('DHS_DOHHvsWT_EC/enrichment.KEGG.tsv', sep='\t')
df4 = pd.read_csv('DHS_DOHHvsWT_EC/enrichment.RCTM.tsv', sep='\t')
df5 = pd.read_csv('DHS_DOHHvsWT_EC/enrichment.WikiPathways.tsv', sep='\t')

df6 = pd.read_csv('eIF5A_DDvsDHS_DOHH/enrichment.KEGG.tsv', sep='\t')
df7 = pd.read_csv('eIF5A_DDvsDHS_DOHH/enrichment.RCTM.tsv', sep='\t')
df8 = pd.read_csv('eIF5A_DDvsDHS_DOHH/enrichment.WikiPathways.tsv', sep='\t')

df9 = pd.read_csv('eIF5A_DDvseIF5A/enrichment.KEGG.tsv', sep='\t')
df10 = pd.read_csv('eIF5A_DDvseIF5A/enrichment.RCTM.tsv', sep='\t')
df11 = pd.read_csv('eIF5A_DDvseIF5A/enrichment.WikiPathways.tsv', sep='\t')

df12 = pd.read_csv('eIF5A_DDvsK50A_DD/enrichment.KEGG.tsv', sep='\t')
df13 = pd.read_csv('eIF5A_DDvsK50A_DD/enrichment.RCTM.tsv', sep='\t')
df14 = pd.read_csv('eIF5A_DDvsK50A_DD/enrichment.WikiPathways.tsv', sep='\t')

df15 = pd.read_csv('eIF5A_DDvsTar4_EC/enrichment.KEGG.tsv', sep='\t')
df16 = pd.read_csv('eIF5A_DDvsTar4_EC/enrichment.RCTM.tsv', sep='\t')
df17 = pd.read_csv('eIF5A_DDvsTar4_EC/enrichment.WikiPathways.tsv', sep='\t')

df18 = pd.read_csv('eIF5A_DDvsWT_EC/enrichment.KEGG.tsv', sep='\t')
df19 = pd.read_csv('eIF5A_DDvsWT_EC/enrichment.RCTM.tsv', sep='\t')
df20 = pd.read_csv('eIF5A_DDvsWT_EC/enrichment.WikiPathways.tsv', sep='\t')

df21 = pd.read_csv('eIF5AvsTar4_EC/enrichment.KEGG.tsv', sep='\t')
df22 = pd.read_csv('eIF5AvsTar4_EC/enrichment.RCTM.tsv', sep='\t')
df23 = pd.read_csv('eIF5AvsTar4_EC/enrichment.WikiPathways.tsv', sep='\t')

df24 = pd.read_csv('eIF5AvsWT_EC/enrichment.KEGG.tsv', sep='\t')
df25 = pd.read_csv('eIF5AvsWT_EC/enrichment.RCTM.tsv', sep='\t')
df26 = pd.read_csv('eIF5AvsWT_EC/enrichment.WikiPathways.tsv', sep='\t')

df27 = pd.read_csv('K50A_DDvsDHS_DOHH/enrichment.KEGG.tsv', sep='\t')
df28 = pd.read_csv('K50A_DDvsDHS_DOHH/enrichment.RCTM.tsv', sep='\t')
df29 = pd.read_csv('K50A_DDvsDHS_DOHH/enrichment.WikiPathways.tsv', sep='\t')

df30 = pd.read_csv('K50A_DDvsTar4_EC/enrichment.KEGG.tsv', sep='\t')
df31 = pd.read_csv('K50A_DDvsTar4_EC/enrichment.RCTM.tsv', sep='\t')
df32 = pd.read_csv('K50A_DDvsTar4_EC/enrichment.WikiPathways.tsv', sep='\t')

df33 = pd.read_csv('K50A_DDvsWT_EC/enrichment.KEGG.tsv', sep='\t')
df34 = pd.read_csv('K50A_DDvsWT_EC/enrichment.RCTM.tsv', sep='\t')
df35 = pd.read_csv('K50A_DDvsWT_EC/enrichment.WikiPathways.tsv', sep='\t')

df36 = pd.read_csv('Tar4_ECvsWT_EC/enrichment.KEGG.tsv', sep='\t')
df37 = pd.read_csv('Tar4_ECvsWT_EC/enrichment.RCTM.tsv', sep='\t')
df38 = pd.read_csv('Tar4_ECvsWT_EC/enrichment.WikiPathways.tsv', sep='\t')









# Convert to JSON
df.to_json('DHS_DOHHvsTar4_EC/enrichment.KEGG.json', orient='records', lines=False)
df1.to_json('DHS_DOHHvsTar4_EC/enrichment.RCTM.json', orient='records', lines=False)
df2.to_json('DHS_DOHHvsTar4_EC/enrichment.WikiPathways.json', orient='records', lines=False)
# Convert to JSON
df3.to_json('DHS_DOHHvsWT_EC/enrichment.KEGG.json', orient='records', lines=False)
df4.to_json('DHS_DOHHvsWT_EC/enrichment.RCTM.json', orient='records', lines=False)
df5.to_json('DHS_DOHHvsWT_EC/enrichment.WikiPathways.json', orient='records', lines=False)
# Convert to JSON
df6.to_json('eIF5A_DDvsDHS_DOHH/enrichment.KEGG.json', orient='records', lines=False)
df7.to_json('eIF5A_DDvsDHS_DOHH/enrichment.RCTM.json', orient='records', lines=False)
df8.to_json('eIF5A_DDvsDHS_DOHH/enrichment.WikiPathways.json', orient='records', lines=False)
# Convert to JSON
df9.to_json('eIF5A_DDvseIF5A/enrichment.KEGG.json', orient='records', lines=False)
df10.to_json('eIF5A_DDvseIF5A/enrichment.RCTM.json', orient='records', lines=False)
df11.to_json('eIF5A_DDvseIF5A/enrichment.WikiPathways.json', orient='records', lines=False)

df12.to_json('eIF5A_DDvsK50A_DD/enrichment.KEGG.json', orient='records', lines=False)
df13.to_json('eIF5A_DDvsK50A_DD/enrichment.RCTM.json', orient='records', lines=False)
df14.to_json('eIF5A_DDvsK50A_DD/enrichment.WikiPathways.json', orient='records', lines=False)

df15.to_json('eIF5A_DDvsTar4_EC/enrichment.KEGG.json', orient='records', lines=False)
df16.to_json('eIF5A_DDvsTar4_EC/enrichment.RCTM.json', orient='records', lines=False)
df17.to_json('eIF5A_DDvsTar4_EC/enrichment.WikiPathways.json', orient='records', lines=False)

df18.to_json('eIF5A_DDvsWT_EC/enrichment.KEGG.json', orient='records', lines=False)
df19.to_json('eIF5A_DDvsWT_EC/enrichment.RCTM.json', orient='records', lines=False)
df20.to_json('eIF5A_DDvsWT_EC/enrichment.WikiPathways.json', orient='records', lines=False)

df21.to_json('eIF5AvsTar4_EC/enrichment.KEGG.json', orient='records', lines=False)
df22.to_json('eIF5AvsTar4_EC/enrichment.RCTM.json', orient='records', lines=False)
df23.to_json('eIF5AvsTar4_EC/enrichment.WikiPathways.json', orient='records', lines=False)

df24.to_json('eIF5AvsWT_EC/enrichment.KEGG.json', orient='records', lines=False)
df25.to_json('eIF5AvsWT_EC/enrichment.RCTM.json', orient='records', lines=False)
df26.to_json('eIF5AvsWT_EC/enrichment.WikiPathways.json', orient='records', lines=False)

df27.to_json('K50A_DDvsDHS_DOHH/enrichment.KEGG.json', orient='records', lines=False)
df28.to_json('K50A_DDvsDHS_DOHH/enrichment.RCTM.json', orient='records', lines=False)
df29.to_json('K50A_DDvsDHS_DOHH/enrichment.WikiPathways.json', orient='records', lines=False)

df30.to_json('K50A_DDvsTar4_EC/enrichment.KEGG.json', orient='records', lines=False)
df31.to_json('K50A_DDvsTar4_EC/enrichment.RCTM.json', orient='records', lines=False)
df32.to_json('K50A_DDvsTar4_EC/enrichment.WikiPathways.json', orient='records', lines=False)

df33.to_json('K50A_DDvsWT_EC/enrichment.KEGG.json', orient='records', lines=False)
df34.to_json('K50A_DDvsWT_EC/enrichment.RCTM.json', orient='records', lines=False)
df35.to_json('K50A_DDvsWT_EC/enrichment.WikiPathways.json', orient='records', lines=False)

df36.to_json('Tar4_ECvsWT_EC/enrichment.KEGG.json', orient='records', lines=False)
df37.to_json('Tar4_ECvsWT_EC/enrichment.RCTM.json', orient='records', lines=False)
df38.to_json('Tar4_ECvsWT_EC/enrichment.WikiPathways.json', orient='records', lines=False)






vp = pd.read_csv('../graphs/eIF5A_DDvsTar4_EC/eIF5A_DDvsTar4_EC.DEG.all.csv', sep=',')
vp1 = pd.read_csv('../graphs/DHS_DOHHvsTar4_EC/DHS_DOHHvsTar4_EC.DEG.all.csv', sep=',')
vp2 = pd.read_csv('../graphs/DHS_DOHHvsWT_EC/DHS_DOHHvsWT_EC.DEG.all.csv', sep=',')
vp3 = pd.read_csv('../graphs/eIF5A_DDvsDHS_DOHH/eIF5A_DDvsDHS_DOHH.DEG.all.csv', sep=',')
vp4 = pd.read_csv('../graphs/eIF5A_DDvseIF5A/eIF5A_DDvseIF5A.DEG.all.csv', sep=',')
vp5 = pd.read_csv('../graphs/eIF5A_DDvsK50A_DD/eIF5A_DDvsK50A_DD.DEG.all.csv', sep=',')
vp6 = pd.read_csv('../graphs/eIF5A_DDvsWT_EC/eIF5A_DDvsWT_EC.DEG.all.csv', sep=',')
vp7 = pd.read_csv('../graphs/eIF5AvsTar4_EC/eIF5AvsTar4_EC.DEG.all.csv', sep=',')
vp8 = pd.read_csv('../graphs/eIF5AvsWT_EC/eIF5AvsWT_EC.DEG.all.csv', sep=',')
vp9 = pd.read_csv('../graphs/K50A_DDvsDHS_DOHH/K50A_DDvsDHS_DOHH.DEG.all.csv', sep=',')
vp10 = pd.read_csv('../graphs/K50A_DDvsTar4_EC/K50A_DDvsTar4_EC.DEG.all.csv', sep=',')
vp11 = pd.read_csv('../graphs/K50A_DDvsWT_EC/K50A_DDvsWT_EC.DEG.all.csv', sep=',')
vp12 = pd.read_csv('../graphs/Tar4_ECvsWT_EC/Tar4_ECvsWT_EC.DEG.all.csv', sep=',')



vp.to_json('../graphs/eIF5A_DDvsTar4_EC/eIF5A_DDvsTar4_EC.DEG.all.csv.json', orient='records', lines=False)
vp1.to_json('../graphs/DHS_DOHHvsTar4_EC/DHS_DOHHvsTar4_EC.DEG.all.json', orient='records', lines=False)
vp2.to_json('../graphs/DHS_DOHHvsWT_EC/DHS_DOHHvsWT_EC.DEG.all.json', orient='records', lines=False)
vp3.to_json('../graphs/eIF5A_DDvsDHS_DOHH/eIF5A_DDvsDHS_DOHH.DEG.all.json',orient='records', lines=False)
vp4.to_json('../graphs/eIF5A_DDvseIF5A/eIF5A_DDvseIF5A.DEG.all.json', orient='records', lines=False)
vp5.to_json('../graphs/eIF5A_DDvsK50A_DD/eIF5A_DDvsK50A_DD.DEG.all.json', orient='records', lines=False)
vp6.to_json('../graphs/eIF5A_DDvsWT_EC/eIF5A_DDvsWT_EC.DEG.all.json', orient='records', lines=False)
vp7.to_json('../graphs/eIF5AvsTar4_EC/eIF5AvsTar4_EC.DEG.all.json', orient='records', lines=False)
vp8.to_json('../graphs/eIF5AvsWT_EC/eIF5AvsWT_EC.DEG.all.json', orient='records', lines=False)
vp9.to_json('../graphs/K50A_DDvsDHS_DOHH/K50A_DDvsDHS_DOHH.DEG.all.json', orient='records', lines=False)
vp10.to_json('../graphs/K50A_DDvsTar4_EC/K50A_DDvsTar4_EC.DEG.all.json', orient='records', lines=False)
vp11.to_json('../graphs/K50A_DDvsWT_EC/K50A_DDvsWT_EC.DEG.all.json', orient='records', lines=False)
vp12.to_json('../graphs/Tar4_ECvsWT_EC/Tar4_ECvsWT_EC.DEG.all.json', orient='records', lines=False)