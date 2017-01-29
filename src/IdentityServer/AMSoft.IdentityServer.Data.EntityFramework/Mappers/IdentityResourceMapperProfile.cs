using System.Linq;
using AMSoft.IdentityServer.Data.EntityFramework.Entities;
using AutoMapper;

namespace AMSoft.IdentityServer.Data.EntityFramework.Mappers
{
    /// <summary>
    /// AutoMapper configuration for identity resource
    /// Between model and entity
    /// </summary>
    public class IdentityResourceMapperProfile : Profile
    {
        /// <summary>
        /// <see cref="IdentityResourceMapperProfile"/>
        /// </summary>
        public IdentityResourceMapperProfile()
        {
            // entity to model
            CreateMap<IdentityResource, IdentityServer4.Models.IdentityResource>(MemberList.Destination)
                .ForMember(x => x.UserClaims, opt => opt.MapFrom(src => src.UserClaims.Select(x => x.Type)));

            // model to entity
            CreateMap<IdentityServer4.Models.IdentityResource, IdentityResource>(MemberList.Source)
                .ForMember(x => x.UserClaims, opts => opts.MapFrom(src => src.UserClaims.Select(x => new IdentityClaim { Type = x })));
        }
    }
}