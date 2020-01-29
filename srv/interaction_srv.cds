using app.interactions from '../db/interactions';
service CatalogService {

 entity Interactions_Header
	@readonly
	as projection on interactions.Interactions_Header;

 entity Interactions_Items
	@readonly
	as projection on  interactions.Interactions_Items;

}