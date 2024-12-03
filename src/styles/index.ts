import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252628',
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#252628',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    paddingVertical: 12,
    paddingLeft: 8,
    fontSize: 16,
  },
  categoryList: {
    marginBottom: 16,
  },
  categoryChip: {
    backgroundColor: '#252628',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  selectedCategoryChip: {
    backgroundColor: '#8b5cf6',
  },
  categoryChipText: {
    color: '#888',
    fontSize: 14,
  },
  selectedCategoryChipText: {
    color: '#fff',
  },
  toolList: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#252628',
    borderWidth: 0,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
  },
  iconContainer: {
    marginRight: 12,
  },
  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  cardContent: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },
  cardDescription: {
    color: '#888',
    fontSize: 14,
    marginBottom: 8,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryBadge: {
    backgroundColor: '#1a1b1e',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  categoryText: {
    color: '#888',
    fontSize: 12,
  },
  pricingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pricingText: {
    color: '#888',
    fontSize: 12,
    marginRight: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: '#888',
    fontSize: 12,
    marginLeft: 4,
  },
  // Detail Screen Styles
  breadcrumb: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  breadcrumbText: {
    color: '#888',
    fontSize: 14,
  },
  releaseDate: {
    color: '#888',
    fontSize: 12,
    marginBottom: 16,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  detailIcon: {
    width: 96,
    height: 96,
    borderRadius: 16,
    marginBottom: 16,
  },
  detailTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  noRating: {
    color: '#888',
    fontSize: 14,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  chromeStoreButton: {
    backgroundColor: '#8b5cf6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    flex: 2,
    marginRight: 8,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 8,
  },
  whatsappButton: {
    backgroundColor: '#25D366',
    padding: 12,
    borderRadius: 8,
    marginRight: 8,
  },
  saveButton: {
    backgroundColor: '#252628',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginRight: 8,
  },
  saveCount: {
    color: '#fff',
    marginLeft: 4,
  },
  menuButton: {
    backgroundColor: '#252628',
    padding: 12,
    borderRadius: 8,
  },
  description: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  overviewSection: {
    marginBottom: 24,
  },
  overviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  overviewText: {
    color: '#888',
    fontSize: 14,
    lineHeight: 22,
  },
  primaryTaskSection: {
    marginBottom: 24,
  },
  taskChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#252628',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  taskChipText: {
    color: '#888',
    marginLeft: 8,
  },
  ratingsSection: {
    marginBottom: 24,
  },
  ratingSubtitle: {
    color: '#888',
    fontSize: 14,
    marginTop: 8,
    marginBottom: 16,
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  starIcon: {
    marginHorizontal: 4,
  },
  reviewInput: {
    backgroundColor: '#252628',
    color: '#fff',
    padding: 16,
    borderRadius: 8,
    height: 120,
    textAlignVertical: 'top',
    marginBottom: 16,
  },
  postButton: {
    backgroundColor: '#8b5cf6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  postButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  featureRequestsSection: {
    marginBottom: 24,
  },
  featureRequestText: {
    color: '#888',
    fontSize: 14,
    marginTop: 8,
  },
  socialSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialButton: {
    backgroundColor: '#252628',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  socialButtonText: {
    color: '#fff',
  },
  bannerContainer: {
    backgroundColor: '#252628',
    borderRadius: 12,
    padding: 16,
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerIcon: {
    marginRight: 12,
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bannerDescription: {
    color: '#888',
    fontSize: 14,
    lineHeight: 20,
  },
});
