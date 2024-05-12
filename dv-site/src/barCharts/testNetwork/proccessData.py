import pandas as pd

# Load the data
interactions_df = pd.read_csv('./string_interactions (1).tsv', sep='\t')
degrees_df = pd.read_csv('./string_node_degrees (1).tsv', sep='\t')
coordinates_df = pd.read_csv('./string_network_coordinates (1).tsv', sep='\t')

# Renaming columns for clarity in merging
degrees_df.rename(columns={'#node': 'node_name'}, inplace=True)
coordinates_df.rename(columns={'#node': 'node_name'}, inplace=True)

# Merging node details from degrees and coordinates into the interactions DataFrame
# Merge node1 details
interactions_enriched_df = pd.merge(
    interactions_df,
    degrees_df,
    left_on='node1_string_id',
    right_on='identifier',
    how='left',
    suffixes=('', '_deg1')  # Specify unique suffixes
).rename(columns={'node_degree': 'node1_degree'})

interactions_enriched_df = pd.merge(
    interactions_enriched_df,
    coordinates_df,
    left_on='node1_string_id',
    right_on='identifier',
    how='left',
    suffixes=('', '_coord1')  # Specify unique suffixes
).rename(columns={'x_position': 'node1_x', 'y_position': 'node1_y', 'annotation': 'node1_annotation'})

# Merge node2 details
interactions_enriched_df = pd.merge(
    interactions_enriched_df,
    degrees_df,
    left_on='node2_string_id',
    right_on='identifier',
    how='left',
    suffixes=('', '_deg2')  # Specify unique suffixes
).rename(columns={'node_degree': 'node2_degree'})

interactions_enriched_df = pd.merge(
    interactions_enriched_df,
    coordinates_df,
    left_on='node2_string_id',
    right_on='identifier',
    how='left',
    suffixes=('', '_coord2')  # Specify unique suffixes
).rename(columns={'x_position': 'node2_x', 'y_position': 'node2_y', 'annotation': 'node2_annotation'})

# Dropping redundant columns and resolving any conflicts from merging
columns_to_drop = ['identifier', 'color', 'node_name']

interactions_enriched_df.drop(columns=columns_to_drop, inplace=True, errors='ignore')

# Check for any missing column issues before selecting them
print(interactions_enriched_df.columns)

# Select only the needed columns and rename for clarity
final_columns = [
    '#node1', 'node1_string_id', 'node2', 'node2_string_id', 'combined_score',
    'node1_degree', 'node1_x', 'node1_y', 'node1_annotation', 'node2_degree', 'node2_x', 'node2_y', 'node2_annotation'
]

final_network_df = interactions_enriched_df[final_columns].rename(columns={
    '#node1': 'Node1', 'node1_string_id': 'Node1_ID', 'node2': 'Node2',
    'node2_string_id': 'Node2_ID', 'combined_score': 'Interaction_Score',
    'node1_degree': 'Node1_Degree', 'node1_x': 'Node1_X', 'node1_y': 'Node1_Y', 'node1_annotation': 'Node1_Annotation',
    'node2_degree': 'Node2_Degree', 'node2_x': 'Node2_X', 'node2_y': 'Node2_Y', 'node2_annotation': 'Node2_Annotation'
})

# Save to CSV
final_network_df.to_csv('processed_network_data.csv', index=False)
