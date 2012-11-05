/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"5bTf80gG6JIiZ05hmtcXWYxkgvUKw2nY"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"rld46GGlGUg1GxgUSEkreQK9ZzP3UH10"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"zMl6G29iYs8E33T4QFHzJvxMQK3ptP3k"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"bvij83O7AKHUhsSSKnrxu3fp7F2oHarA"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"Vrq74ML9VqvrxdIdSdKr9Tkl025vKLwy"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"vnhMc4epebz6k6DPzoQMAoXkRdTrIeVo"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
