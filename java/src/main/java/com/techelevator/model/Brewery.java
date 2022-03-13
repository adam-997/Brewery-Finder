package com.techelevator.model;

public class Brewery {
   private Long breweryId;
   private Long userId;
   private String name;
   private String websiteUrl;
   private String address;
   private String city;
   private String zipcode;
   private String phoneNumber;
   private String breweryLogoUrl;
   private String description;
   private String hours;
   private String lat;
   private String lng;

   public Long getBreweryId() {
      return breweryId;
   }
   public void setBreweryId(long breweryId) {
      this.breweryId = breweryId;
   }

   public Long getUserId() {
      return userId;
   }
   public void setUserId(long userId) {
      this.userId = userId;
   }

   public String getName() {
      return name;
   }
   public void setName(String name) {
      this.name = name;
   }

   public void setWebsiteUrl(String websiteUrl) {
      this.websiteUrl = websiteUrl;
   }
   public String getWebsiteUrl() {
      return websiteUrl;
   }

   public String getAddress() {
      return address;
   }
   public void setAddress(String address) {
      this.address = address;
   }

   public String getCity() {
      return city;
   }
   public void setCity(String city) {
      this.city = city;
   }

   public String getZipcode() {
      return zipcode;
   }
   public void setZipcode(String zipcode) {
      this.zipcode = zipcode;
   }

   public String getPhoneNumber() {
      return phoneNumber;
   }
   public void setPhoneNumber(String phoneNumber) {
      this.phoneNumber = phoneNumber;
   }

   public String getBreweryLogoUrl() {
      return breweryLogoUrl;
   }
   public void setBreweryLogoUrl(String breweryLogoUrl) {
      this.breweryLogoUrl = breweryLogoUrl;
   }

   public String getDescription() {
      return description;
   }
   public void setDescription(String description) {
      this.description = description;
   }

   public String getHours() {
      return hours;
   }
   public void setHours(String hours) {
      this.hours = hours;
   }

   public String getLat() {
      return lat;
   }
   public void setLat(String lat) {
      this.lat = lat;
   }

   public String getLng() {
      return lng;
   }
   public void setLng(String lng) {
      this.lng = lng;
   }

}
