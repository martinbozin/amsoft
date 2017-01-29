﻿using AMSoft.IdentityServer.Data.EntityFramework.Entities;
using AutoMapper;

namespace AMSoft.IdentityServer.Data.EntityFramework.Mappers
{
    public static class ApiResourceMappers
    {
        static ApiResourceMappers()
        {
            Mapper = new MapperConfiguration(cfg => cfg.AddProfile<ApiResourceMapperProfile>())
                .CreateMapper();
        }

        internal static IMapper Mapper { get; }

        public static IdentityServer4.Models.ApiResource ToModel(this ApiResource resource)
        {
            return resource == null ? null : Mapper.Map<IdentityServer4.Models.ApiResource>(resource);
        }

        public static ApiResource ToEntity(this IdentityServer4.Models.ApiResource resource)
        {
            return resource == null ? null : Mapper.Map<ApiResource>(resource);
        }
    }
}